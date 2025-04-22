import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import routes from './navigation/routes'
const router = createRouter({
    history: createMemoryHistory(),
    routes:routes
})
createApp(App)
.use(router)
.mount('#app')
