import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './helpers'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
