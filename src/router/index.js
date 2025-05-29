import { createRouter, createWebHistory } from 'vue-router'
import HeroPage from '../components/HeroPage.vue'
import ExploreBrand from '../components/ExploreBrand.vue'
import ExploreVehicles from '../components/ExploreVehicles.vue'
import FairPrice from '../components/FairPrice.vue'
import WhyChoose from '../components/WhyChoose.vue'
import PopularMakes from '../components/PopularMakes.vue'
import CustomerSay from '../components/CustomerSay.vue'

const routes = [
  {
    path: '/',
    component: HeroPage,
    name: 'home'
  },
  {
    path: '/explore-brand',
    component: ExploreBrand,
    name: 'explore-brand'
  },
  {
    path: '/explore-vehicles',
    component: ExploreVehicles,
    name: 'explore-vehicles'
  },
  {
    path: '/fair-price',
    component: FairPrice,
    name: 'fair-price'
  },
  {
    path: '/why-choose',
    component: WhyChoose,
    name: 'why-choose'
  },
  {
    path: '/popular-makes',
    component: PopularMakes,
    name: 'popular-makes'
  },
  {
    path: '/customer-say',
    component: CustomerSay,
    name: 'customer-say'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
