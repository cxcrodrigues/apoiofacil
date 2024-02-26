import axios from 'axios';

const API_KEY = 'AIzaSyBU8-A1siAU7krXIkA1Fs_ezrGMiCxsyYk';
const PLAYLIST_ID = 'PLAdgoAGKccdo2pvboCL5KpfLx-wUqZHsN';

interface VideoInfo {
  title: string;
  subtitle: string;
  videoId: string;
  wallpaper: string;
}

const YoutubeService = {
  async getAllPlaylistVideos(playlistId: string): Promise<string[]> {
    const cacheKey = `playlistVideos_${playlistId}`;
    const cacheTimestampKey = `${cacheKey}_timestamp`;

    const cachedData = localStorage.getItem(cacheKey);
    const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

    if (cachedData && cachedTimestamp && Date.now() - parseInt(cachedTimestamp) < 12 * 60 * 60 * 1000) {
        return JSON.parse(cachedData);
    }

    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${API_KEY}`
      );

      const videoIds = response.data.items.map((item: any) => item.snippet.resourceId.videoId);
      localStorage.setItem(cacheKey, JSON.stringify(videoIds));
      localStorage.setItem(cacheTimestampKey, Date.now().toString());

      return videoIds;
    } catch (error) {
      console.error('Error fetching playlist videos:', error);
      throw error;
    }
  },

  async getVideoInfo(videoId: string): Promise<VideoInfo> {
    const cacheKey = `videoInfo_${videoId}`;

    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      return JSON.parse(cachedData);
    }

    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`
      );

      if (response.data.items.length > 0) {
        const videoSnippet = response.data.items[0].snippet;
        const descriptionKeywords = videoSnippet.description.split('\n').map((keyword: string) => keyword.trim());

        const titleKeyword = descriptionKeywords.find((keyword: string) => keyword.startsWith('#TITLE:'));
        const subtitleKeyword = descriptionKeywords.find((keyword: string) => keyword.startsWith('#SUBTITLE:'));

        const availableThumbnails = ['maxres', 'standard', 'high', 'medium', 'default'];
        const wallpaper = availableThumbnails.reduce((foundThumbnail: string | undefined, thumbnailType: string) => {
          return foundThumbnail || videoSnippet.thumbnails?.[thumbnailType]?.url;
        }, '');

        const returnValue = {
            title: titleKeyword ? titleKeyword.substring('#TITLE:'.length).trim() : videoSnippet.title,
            subtitle: subtitleKeyword ? subtitleKeyword.substring('#SUBTITLE:'.length).trim() : '',
            videoId: videoId,
            wallpaper: wallpaper || '', 
        };
        
        localStorage.setItem(cacheKey, JSON.stringify(returnValue));

        return returnValue;
      }
    } catch (error) {
        console.error('Error fetching video information:', error);
        const notFoundInfo = {
            title: 'Video not found',
            subtitle: '',
            videoId: videoId,
            wallpaper: '',
        };

        localStorage.setItem(cacheKey, JSON.stringify(notFoundInfo));
        
        return notFoundInfo;
    }
    const notFoundInfo = {
        title: 'Video not found',
        subtitle: '',
        videoId: videoId,
        wallpaper: '',
    };
  
    localStorage.setItem(cacheKey, JSON.stringify(notFoundInfo));

    return notFoundInfo
  },

  async getPlaylistVideosInfo(): Promise<VideoInfo[]> {
    try {
      const allVideoIds = await this.getAllPlaylistVideos(PLAYLIST_ID);

      const videosInfo = await Promise.all(
        allVideoIds.map(async (videoId: string) => {
          const videoInfo = await this.getVideoInfo(videoId);
          return videoInfo;
        })
      );

      return videosInfo;
    } catch (error) {
      console.error('Error fetching playlist videos information:', error);
      throw error;
    }
  },
};

export default YoutubeService;
