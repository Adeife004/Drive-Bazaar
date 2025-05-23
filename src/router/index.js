import { createRouter, createWebHistory } from 'vue-router'
import HeroPage from '../components/HeroPage.vue'
import ExploreBrand from '../components/ExploreBrand.vue'
import ExploreVehicles from '../components/ExploreVehicles.vue'
import FairPrice from '../components/FairPrice.vue'
import WhyChoose from '../components/WhyChoose.vue'

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
  },
  {
    path: '/fair-price',
    componenet: FairPrice,
    name: 'fair-price'
  },
  {
    path: '/why-choose',
    componenet: WhyChoose,
    name: 'why-choose'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
