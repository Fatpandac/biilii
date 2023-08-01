import 'virtual:uno.css'
import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueGtag from 'vue-gtag'
import App from './App.vue'
import router from './router'
import NPlayer from './plugins/NPlayer'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(router).use(NPlayer).use(VueGtag, {
  config: { id: 'G-7DWSQ58M55' },
}, router)

app.mount('#app')
