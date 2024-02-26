<template>
    <HeaderComponent :navcolor="1" />
    <div class="main-content background-position-center-top" style="background-image: url(https://cxcrodrigues.github.io/apoiofacil_website/images/vertical-line-bg-small-medium-gray.svg)">
            <!-- start page title --> 
            <section class="top-space-margin pb-0 position-relative" style="margin-top: 125.988px;">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-xl-11"><h1 class="alt-font fs-170 lg-fs-140 md-fs-120 sm-fs-80 sm-ls-minus-2px fw-500 mb-0 ls-minus-7px appear">
                            <span class="anime-text words chars splitting">
                                <span class="word" style="--word-index: 0;">
                                    <span class="char" data-char="E" style="--char-index: 0; opacity: 1; transform: translateX(0px); filter: blur(0px);">P</span>
                                    <span class="char" data-char="x" style="--char-index: 1; opacity: 1; transform: translateX(0px); filter: blur(0px);">R</span>
                                    <span class="char" data-char="p" style="--char-index: 2; opacity: 1; transform: translateX(0px); filter: blur(0px);">O</span>
                                    <span class="char" data-char="l" style="--char-index: 3; opacity: 1; transform: translateX(0px); filter: blur(0px);">J</span>
                                    <span class="char" data-char="o" style="--char-index: 4; opacity: 1; transform: translateX(0px); filter: blur(0px);">E</span>
                                    <span class="char" data-char="r" style="--char-index: 5; opacity: 1; transform: translateX(0px); filter: blur(0px);">T</span>
                                    <span class="char" data-char="e" style="--char-index: 6; opacity: 1; transform: translateX(0px); filter: blur(0px);">O</span>
                                    <span class="char" data-char="e" style="--char-index: 6; opacity: 1; transform: translateX(0px); filter: blur(0px);">S</span>
                                </span>
                            </span>
                        </h1>
                    </div>
                    </div>
                    <div class="row align-items-center lg-mb-50px sm-mb-0">
                        <div class="col-lg-7 text-star text-xl-end offset-lg-1">
                            <h2 class="alt-font fs-170 lg-fs-140 md-fs-120 sm-fs-80 sm-ls-minus-2px fw-300 mb-0 ls-minus-7px appear">
                                <span class="anime-text words chars splitting">
                                    <span class="word" style="--word-index: 0;">
                                        <span class="char" data-char="p" style="--char-index: 0; opacity: 1; transform: translateX(0px); filter: blur(0px);">M</span>
                                        <span class="char" data-char="o" style="--char-index: 1; opacity: 1; transform: translateX(0px); filter: blur(0px);">A</span>
                                        <span class="char" data-char="r" style="--char-index: 2; opacity: 1; transform: translateX(0px); filter: blur(0px);">K</span>
                                        <span class="char" data-char="t" style="--char-index: 3; opacity: 1; transform: translateX(0px); filter: blur(0px);">I</span>
                                        <span class="char" data-char="f" style="--char-index: 4; opacity: 1; transform: translateX(0px); filter: blur(0px);">N</span>
                                        <span class="char" data-char="o" style="--char-index: 5; opacity: 1; transform: translateX(0px); filter: blur(0px);">G</span>
                                        <span class="char" data-char="l" style="--char-index: 6; opacity: 1; transform: translateX(0px); filter: blur(0px);"> </span>
                                        <span class="char" data-char="i" style="--char-index: 7; opacity: 1; transform: translateX(0px); filter: blur(0px);">O</span>
                                        <span class="char" data-char="o" style="--char-index: 8; opacity: 1; transform: translateX(0px); filter: blur(0px);">F</span>
                                        <span class="char" data-char="o" style="--char-index: 8; opacity: 1; transform: translateX(0px); filter: blur(0px);">'</span>
                                        <span class="char" data-char="o" style="--char-index: 8; opacity: 1; transform: translateX(0px); filter: blur(0px);">S</span>
                                    </span>
                                </span>
                            </h2>
                        </div>
                        <div class="col-lg-3 last-paragraph-no-margin appear">
                            <p class="mt-40px md-w-75 sm-w-85 sm-mt-30px">
                                Veja aqui alguns dos nossos projetos, e fique a conhecer um pouco mais sobre o nosso trabalho.
                            </p>
                        </div>
                    </div>
                </div> 
            </section>
            <!-- end page title -->
            <!-- start section -->
            <section class="ps-30px pe-30px md-ps-0 md-pe-0">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col sm-p-0">
                            <div v-masonry="0" transition-duration="0.3s" item-selector=".item">
                                <div v-masonry-tile class="item" v-for="(item, index) in this.videos" v-bind:key="index" :style="{ 'background-image': `url(${item.wallpaper})` }">
                                    <a :href="'https://youtu.be/' + item.videoId " target="_blank">
                                        <div class="absolute-center">
                                            <img src="img/playico.png" class="img-rounded" width="100px">
                                        </div>
                                        <div class="absolute-bottom-left title left-50px bottom-20px z-index-1">
                                            <span class="opacity-4 d-block fs-15 text-white fw-300">{{ item.subtitle }}</span>
                                            <h6 class="alt-font text-white p-0 m-0 fw-300">{{ item.title }}</h6>
                                        </div>
                                        <img :src="item.wallpaper" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end section --> 
        </div>
    <FooterComponent />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import YoutubeService from '@/services/YoutubeService';
interface VideoInfo {
  title: string;
  subtitle: string;
  videoId: string;
  wallpaper: string;
}

export default defineComponent({
    components: {
        HeaderComponent,
        FooterComponent
    },
    async mounted() {
        document.title = 'Apoio Fácil - Projetos';
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            favicon.setAttribute('href', 'https://cxcrodrigues.github.io/apoiofacil_website/favicon.ico');
        }

        this.videos = await YoutubeService.getPlaylistVideosInfo();
    },
    data() {
        return {
            videos: [] as VideoInfo[],
        }
    }
});
</script>
<style>

.item {
    max-width: 380px;
    max-height: 380px;
    margin: 10px;
    transition: opacity 0.3s;
    cursor: pointer;
}

.item a {
    display: block;
    width: 100%;
    height: 100%;
}

.item a .absolute-center {
    position: absolute;
    top: 75%;
    left: 87%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 2;
}

.item:hover {
    opacity: 0.7;
}

</style>