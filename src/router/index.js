// Composables
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/pages/HomeView.vue'
// import PastriesView from '@/pages/PastriesView.vue'
import { routes } from 'vue-router/auto-routes'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // : [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/pastries',
  //     name: 'pastries',
  //     component: PastriesView
  //   }
  // ]
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 };
  },
})

export default router
