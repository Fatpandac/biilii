import { createRouter, createWebHistory } from 'vue-router'
import { logout } from '@/utils/logout'
import HomeViewVue from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeViewVue,
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/RcmdVideosView.vue'),
        },
        {
          path: '/popular',
          name: 'Popular',
          component: () => import('@/views/PopularVideosView.vue'),
          props: {
            title: 'Popular',
          },
        },
        {
          path: '/dynamic',
          name: 'Dynamic',
          component: () => import('@/views/VideosView.vue'),
          props: {
            title: 'Dynamic',
          },
        },
        {
          path: '/history',
          name: 'Hisrory',
          component: () => import('@/views/VideosView.vue'),
          props: {
            title: 'History',
          },
        },
      ],
    },
    {
      path: '/logout',
      name: 'Logout',
      redirect: '',
      beforeEnter: async (_from, _to, next) => {
        const { fetchData } = userStore()
        await logout()
        await fetchData()

        next('/')
      },
    },
  ],
})

export default router
