import { createRouter, createWebHistory } from 'vue-router'
import HeroPage from '../components/HeroPage.vue'
import ExploreBrand from '../components/ExploreBrand.vue'
import ExploreVehicles from '../components/ExploreVehicles.vue'

const routes = [
  {
    path: '/',
    components: {
      hero: HeroPage,
      default: HeroPage
    },
    name: 'home'
  },
  {
    path: '/explore-brand',
    component: ExploreBrand,
    name: 'explore-brand'
  },
  {
    path: '/explore-vehicles',
    componenet: ExploreVehicles,
    name: 'explore-vehicles'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
