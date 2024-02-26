<template>
    <HeaderComponent />
    <MainPageSliders />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import HeaderComponent from '@/components/HeaderComponent.vue';
import MainPageSliders from '@/components/MainPageSliders.vue';


export default defineComponent({
    components: {
        HeaderComponent,
        MainPageSliders
    },
    mounted() {
        document.title = 'Apoio Fácil';
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            favicon.setAttribute('href', 'favicon.ico');
        }
    },
});
</script>