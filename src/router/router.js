import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/components/Home.vue'
import SolutionPage from '@/components/SolutionPage.vue'
import PartnersPage from '@/components/PartnersPage.vue'
import BlogPage from '@/components/BlogPage.vue'
import formspage from '@/components/formspage.vue'


const routes = [
  { path: '/', name: "Home", component: Home },
  { path: '/solutionpage', name: "SolutionPage", component: SolutionPage },
  { path: '/partnerspage', name: "PartnersPage", component: PartnersPage},
  { path: '/blogpage', name: "BlogPage", component: BlogPage},
  { path: '/formspage', name: "formspage", component: formspage }


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(() => {
})

export default router