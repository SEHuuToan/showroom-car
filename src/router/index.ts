import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/common/DefaultLayout.vue'
import HomeView from '../views/home/index.vue'
import Models from '../views/models/index.vue'
import NewAndEvent from '../views/news/index.vue'
import Service from '../views/service/index.vue'
import Contact from '../views/contact/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/layout'
    },
    {
      path: '/home',
      name: 'home',
      component: DefaultLayout,
      redirect:'/home',
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/models',
          name: 'models',
          component: Models,
        },
        {
          path: '/service',
          name: 'service',
          component: Service,
        },
        {
          path: '/news',
          name: 'news',
          component: NewAndEvent,
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact,
        },
      ]
    }
  ]
})

export default router
