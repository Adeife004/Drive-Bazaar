import { createRouter, createWebHistory } from 'vue-router'
import HeroPage from '../components/HeroPage.vue'
import ExploreBrand from '../components/ExploreBrand.vue'
import ExploreVehicles from '../components/ExploreVehicles.vue'
import FairPrice from '../components/FairPrice.vue'
import WhyChoose from '../components/WhyChoose.vue'
import PopularMakes from '../components/PopularMakes.vue'

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
  },
  {
    path: '/popular-makes',
    componenet: PopularMakes,
    name: 'popular-makes'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
