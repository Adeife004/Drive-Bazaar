import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { scrollAnimation } from './directives/scrollAnimation'

const app = createApp(App)
app.use(router)

// Register the scroll animation directive globally
app.directive('scroll-animation', scrollAnimation)

app.mount('#app')
