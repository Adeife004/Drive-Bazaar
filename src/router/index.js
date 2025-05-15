import { createRouter, createWebHistory } from 'vue-router'
import NavbarPage from '../components/NavbarPage.vue';
import HeroPage from '../components/HeroPage.vue'

const routes = [
  {
    path: '/',
    components: {
      hero: HeroPage,
      default: NavbarPage
    },
    name: 'home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
