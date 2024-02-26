import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { VueMasonryPlugin } from "vue-masonry";

import mitt from 'mitt'

const emitter = mitt()
const app = createApp(App)
app.use(router)
app.config.globalProperties.emitter = emitter
app.use(VueMasonryPlugin)
app.mount('#app')
