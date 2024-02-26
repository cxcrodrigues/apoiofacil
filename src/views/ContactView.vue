<template>
    <HeaderComponent :navcolor="1" />
    <div class="main-content background-position-center-top" style="background-image: url(https://cxcrodrigues.github.io/apoiofacil_website/images/vertical-line-bg-small-medium-gray.svg)">
        <div class="main-content background-position-center-top" style="background-image: url(https://cxcrodrigues.github.io/apoiofacil_website/images/vertical-line-bg-small-medium-gray.svg)">
            <!-- start page title --> 
            <section class="top-space-margin pb-0 position-relative">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-xl-12 text-center">
                            <h1 class="alt-font fs-170 lg-fs-140 md-fs-120 sm-fs-80 sm-ls-minus-2px fw-500 mb-0 ls-minus-7px">Contactos</h1>
                        </div>
                    </div>
                    <div class="row align-items-center lg-mb-50px sm-mb-0">
                        <div class="col-12 text-center last-paragraph-no-margin">
                            <p class="mt-40px md-w-75 sm-w-85 sm-mt-30px">Se tiver projetos cinematográficos que necessite de iluminação cinetamográfica, entre já em contacto!</p>
                        </div>
                    </div> 
                </div>
            </section>
            <!-- end page title -->
            <!-- start section --> 
            <section>
                <div class="container">
                    <div class="row align-items-center mb-40px">
                        <div class="col-xl-6 col-md-7 offset-xl-2 col-3">
                            <div class="separator-line-3px bg-dark-gray"></div>
                        </div>
                        <div class="col-xl-3 col-md-5 col-9">
                            <h6 class="fw-600 mb-0"><a href="mailto:geral@apoiofacil.pt">geral@apoiofacil.pt</a></h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-3 col-md-4 offset-xl-1 last-paragraph-no-margin sm-mb-20px">
                            <span class="d-block text-medium-gray">Contacto</span>
                            <p class="mb-0 fw-600">Paulo Alves</p>
                            <p class="mb-0 fw-600">Hugo Alves</p>
                        </div>
                        <div class="col-xl-3 col-md-4 offset-xl-1 last-paragraph-no-margin sm-mb-20px">
                            <span class="d-block text-medium-gray">E-mail</span>
                            <p class="mb-0 fw-600"><a href="mailto:joca@apoiofacil.pt">joca@apoiofacil.pt</a></p>
                            <p class="mb-0 fw-600"><a href="mailto:hugo_alves88@hotmail.com">hugo_alves88@hotmail.com</a></p>
                        </div>
                        <div class="col-xl-3 col-md-4 offset-xl-1 last-paragraph-no-margin sm-mb-20px">
                            <span class="d-block text-medium-gray">Contacto telefónico</span>
                            <p class="mb-0 fw-600"><a href="tel:+351918728384">+351 918728384</a></p>
                            <p class="mb-0 fw-600"><a href="tel:+351918728384">+351 918728384</a></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-3 col-md-4 offset-xl-5 last-paragraph-no-margin sm-mb-20px mt-5">
                            <span class="d-block text-medium-gray">Morada</span>
                            <p class="mb-0 fw-600">Rua do Rochio 14, 2640-261, Encarnação, Mafra, Portugal</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
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
            favicon.setAttribute('href', 'favicon.ico');
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