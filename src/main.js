import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from './navigation/index'
const router = createRouter({
    history: createWebHistory(), //in order to show the normal url on route change
    // history: createWebHashHistory(), //show url and handle # symbols in the browser
    routes:routes
})
createApp(App)
.use(router) // must be called before mount
.mount('#app')
