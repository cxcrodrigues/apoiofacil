<template>
    <header>
        <nav class="navbar navbar-expand-lg header-transparent header-dark disable-fixed">
            <div class="container-fluid">
                <div class="col-auto col-lg-2 me-lg-0 me-auto d-none d-lg-flex">
                    <div class="header-icon">
                        <div class="header-social-icon icon social-text-style-01 alt-font">
                            <a class="instagram" href="https://www.instagram.com/apoiofacil/" target="_blank">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" width="20px" style="filter: grayscale(100%)">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                    <a class="navbar-brand" href="/">
                        <img src="logo.png" data-at2x="logo.png"
                                alt="" class="default-logo">
                        <img src="logo.png" data-at2x="logo.png"
                                alt="" class="alt-logo">
                        <img src="logo.png" data-at2x="logo.png"
                                alt="" class="mobile-logo">
                    </a>
                </div>
                <div class="col-auto col-lg-2 text-end">
                    <div class="header-icon">
                        <div class="header-push-button hamburger-push-button icon">
                            <div class="push-button"> 
                                <span :style="{ 'background-color': (navcolor == 0 ? 'white' : 'black')}"></span>
                                <span :style="{ 'background-color': (navcolor == 0 ? 'white' : 'black')}"></span>
                                <b class="push-button-text position-absolute alt-font top-3px left-minus-50px fs-15 fw-500" :class="{ 'text-white': navcolor == 0, 'text-dark': navcolor == 1}">Menu</b>
                            </div>
                        </div> 
                    </div>  
                </div>
            </div>
        </nav>
        <div class="push-menu hamburger-nav header-dark hamburger-menu-simple bg-dark-gray" style="background-image: url(images/vertical-line-bg-small.svg)">
            <span class="close-menu bg-white fs-18"><span class="text-dark-gray">X</span></span>
            <div class="d-flex flex-column align-items-center justify-content-center h-100 p-5 sm-px-0">
                <a class="hamburger-logo" href="/">
                    <img src="logo.png" data-at2x="logo.png" alt="">
                </a>
                <div class="row align-items-center justify-content-center">
                    <div class="hamburger-menu menu-list-wrapper col-lg-5 col-md-12 lg-no-margin offset-lg-1" data-scroll-options='{ "theme": "light" }'> 
                        <ul class="menu-item-list fw-300 alt-font ls-minus-2px">
                            <li class="menu-item"><a href="/" class="nav-link">Página Inicial</a></li>
                            <li class="menu-item"><a href="/portfolio" class="nav-link">Portfólio</a></li>
                            <li class="menu-item"><a href="/contactos" class="nav-link">Contactos</a></li>
                        </ul>
                    </div> 
                    <div class="col-md-5 d-none d-lg-inline-block offset-1">
                        <div class="row menu-address">
                            <div class="col-12 mb-50px">
                                <span class="text-white mb-5px d-block">Contactos Telefónicos</span> 
                                <div class="d-block text-medium-gray">
                                    <span>Paulo Alves:</span> <a href="tel:+351918728384" class="text-medium-gray text-white-hover">+351 918728384</a><br>
                                    <span>Hugo Alves:</span> <a href="tel:+351918728384" class="text-medium-gray text-white-hover">+351 918728384</a>
                                </div>
                            </div>
                            <div class="col-12 mb-50px">
                                <span class="text-white mb-5px d-block">Emails</span> 
                                <div class="d-block text-medium-gray">
                                    <a href="mailto:geral@apoiofacil.pt" class="text-medium-gray text-white-hover">geral@apoiofacil.pt</a><br>
                                    <a href="mailto:joca@apoiofacil.pt" class="text-medium-gray text-white-hover">joca@apoiofacil.pt</a><br>
                                    <a href="mailto:jocagaffer@gmail.com" class="text-medium-gray text-white-hover">jocagaffer@gmail.com</a><br>
                                    <a href="mailto:hugo_alves88@hotmail.com" class="text-medium-gray text-white-hover">hugo_alves88@hotmail.com</a>
                                </div>
                            </div>
                            <div class="col-12 last-paragraph-no-margin mb-50px">
                                <span class="text-white mb-5px d-block">Morada</span> 
                                <p class="text-medium-gray">Rua do Rochio nº 14,<br>2640-206, Mafra</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'HeaderComponent',
    props: {
        navcolor: {
            type: Number,
            default: 0
        }
    },
})
</script>
<style>
.hamburger-menu-simple .menu-item-list .nav-link {
    font-size: 37px;
    line-height: 29px;
    left: 0;
}
</style>