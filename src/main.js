import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import { scrollAnimation } from './directives/scrollAnimation'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

// Register the scroll animation directive globally
app.directive('scroll-animation', scrollAnimation)

app.mount('#app')
