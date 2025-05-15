import { createRouter, createWebHistory } from 'vue-router'
import HeroPage from '../components/HeroPage.vue'

const routes = [
  {
    path: '/',
    components: {
      hero: HeroPage,
      default: HeroPage
    },
    name: 'home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
