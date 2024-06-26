import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import tailwind from './style.css'
import './style.css'

createApp(App)
.use(store)
.use(router)
.use(tailwind)
.mount('#app')
