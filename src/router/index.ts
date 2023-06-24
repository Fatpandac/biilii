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
        },
        {
          path: '/dynamic',
          name: 'Dynamic',
          component: () => import('@/views/DynamicFeedView.vue'),
        },
        {
          path: '/history',
          name: 'Hisrory',
          component: () => import('@/views/HistoryVideosView.vue'),
        },
      ],
    },
    {
      path: '/watch',
      name: 'Wathc',
      component: () => import('@/views/WatchView.vue'),
    },
    {
      path: '/space/:mid',
      name: 'Space',
      component: () => import('@/views/SpaceView.vue'),
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/views/SearchView.vue'),
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
