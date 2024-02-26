<template>
    <section class="p-0 full-screen">
        <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
            }"
            :pagination="{
                clickable: false,
            }"
            :navigation="false"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide v-for="video in videos" v-bind:key="video.videoId">
                <div class="cover-background vertical-title-center" :style="{'background-image': 'url(' + video.wallpaper +')'}">
                    <div class="absolute-bottom-left title left-50px bottom-60px z-index-1">
                        <span class="opacity-4 d-block fs-15 text-white fw-300">{{ video.subtitle }}</span>
                        <h6 class="alt-font text-white p-0 m-0 fw-300">{{ video.title }}</h6>
                    </div>
                    <div class="absolute-center text-center z-index-1">
                        <a href="">
                            <img src="https://cxcrodrigues.github.io/apoiofacil_website/img/playico.png" class="img-rounded" width="100px">
                        </a>
                    </div>
                    <a :href="'https://youtu.be/' + video.videoId " target="_blank" class="position-absolute z-index-1 top-0px left-0px h-100 w-100 force-magic-cursor"></a>
                    <div class="opacity-light bg-gradient-dark-transparent"></div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>
<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import YoutubeService from '@/services/YoutubeService';
import HeaderComponent from '@/components/HeaderComponent.vue';

interface VideoInfo {
  title: string;
  subtitle: string;
  videoId: string;
  wallpaper: string;
}

export default defineComponent({
    components: {
        Swiper,
        SwiperSlide,
        HeaderComponent
    },
    data() {
        return {
            videos: [] as VideoInfo[],
            modules: [Autoplay, Pagination, Navigation],
        }
    },
    async mounted() {
        try {
            const syncedVideos = await YoutubeService.getPlaylistVideosInfo() || [];
            syncedVideos.sort(() => Math.random() - 0.5);
            // Go thru the syncedVideos array, and remove the videos where title or subtitle contain "Making of" or "Behind the scenes"
            const filteredVideos = syncedVideos.filter((video) => !video.title.toLowerCase().includes('making of') && !video.subtitle.toLowerCase().includes('making of'));
            const slicedVideos = filteredVideos.slice(0, 5);
            this.videos = slicedVideos;
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    },
});
</script>
<style scoped>
.absolute-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: #fff;
    font-size: 37px;
    line-height: 29px;
    text-align: center;
}

.swiper {
    height: 100vh;
}
</style>