import { createApp, h, provide } from 'vue'
import { createPinia } from 'pinia'
import { router } from './helpers'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import './assets/main.css'
import { apolloClient } from './apollo'

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App)
})
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
