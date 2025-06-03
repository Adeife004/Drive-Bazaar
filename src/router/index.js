import { createRouter, createWebHistory } from 'vue-router'
import HeroPage from '../components/HeroPage.vue'

// Lazy load other components
const ExploreBrand = () => import('../components/ExploreBrand.vue')
const ExploreVehicles = () => import('../components/ExploreVehicles.vue')
const FairPrice = () => import('../components/FairPrice.vue')
const WhyChoose = () => import('../components/WhyChoose.vue')
const PopularMakes = () => import('../components/PopularMakes.vue')
const CustomerSay = () => import('../components/CustomerSay.vue')
const BoxCar = () => import('../components/BoxCar.vue')
const CustomerCars = () => import('../components/CustomerCars.vue')
const LatestBlog = () => import('../components/LatestBlog.vue')

const routes = [
  {
    path: '/',
    component: HeroPage,
    name: 'home',
    meta: {
      title: 'Home - DriveBazaar'
    }
  },
  {
    path: '/explore-brand',
    component: ExploreBrand,
    name: 'explore-brand',
    meta: {
      title: 'Explore Brands - DriveBazaar'
    }
  },
  {
    path: '/explore-vehicles',
    component: ExploreVehicles,
    name: 'explore-vehicles',
    meta: {
      title: 'Explore Vehicles - DriveBazaar'
    }
  },
  {
    path: '/fair-price',
    component: FairPrice,
    name: 'fair-price',
    meta: {
      title: 'Fair Price - DriveBazaar'
    }
  },
  {
    path: '/why-choose',
    component: WhyChoose,
    name: 'why-choose',
    meta: {
      title: 'Why Choose Us - DriveBazaar'
    }
  },
  {
    path: '/popular-makes',
    component: PopularMakes,
    name: 'popular-makes',
    meta: {
      title: 'Popular Makes - DriveBazaar'
    }
  },
  {
    path: '/customer-say',
    component: CustomerSay,
    name: 'customer-say',
    meta: {
      title: 'Customer Reviews - DriveBazaar'
    }
  },
  {
    path: '/box-car',
    component: BoxCar,
    name: 'box-car',
    meta: {
      title: 'Box Car - DriveBazaar'
    }
  },
  {
    path: '/customer-cars',
    component: CustomerCars,
    name: 'customer-cars',
    meta: {
      title: 'Customer Cars - DriveBazaar'
    }
  },
  {
    path: '/latest-blog',
    component: LatestBlog,
    name: 'latest-blog',
    meta: {
      title: 'Latest Blog - DriveBazaar'
    }
  },
  // Add a catch-all route for 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../components/NotFound.vue'),
    meta: {
      title: 'Page Not Found - DriveBazaar'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'DriveBazaar'
  next()
})

export default router
