import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../pages/Home.vue'
import About from '../../pages/About.vue'
import Services from '../../pages/Services.vue'
import Workflow from '../../pages/Workflow.vue'
import Contact from '../../pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'bantu.in - Bantuan Akademik dan Digital Profesional'
    }
  },
  {
    path: '/tentang-kami',
    name: 'About',
    component: About,
    meta: {
      title: 'Tentang Kami - bantu.in'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Layanan - bantu.in'
    }
  },
  {
    path: '/alur-kerja',
    name: 'Workflow',
    component: Workflow,
    meta: {
      title: 'Alur Kerja - bantu.in'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Kontak - bantu.in'
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
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update document title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'bantu.in'
  next()
})

export default router
