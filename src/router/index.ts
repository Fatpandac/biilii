import { createRouter, createWebHistory } from 'vue-router'
import { logout } from '@/utils/logout'
import HomeViewVue from '@/views/HomeView.vue'
import WatchViewVue from '@/views/WatchView.vue'
import SpaceViewVue from '@/views/SpaceView.vue'
import SearchViewVue from '@/views/SearchView.vue'

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
      component: WatchViewVue,
    },
    {
      path: '/space/:mid',
      name: 'Space',
      component: SpaceViewVue,
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchViewVue,
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
