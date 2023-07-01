import { type NavigationGuardNext, type RouteLocationNormalized, createRouter, createWebHistory } from 'vue-router'
import { useCookies } from '@vueuse/integrations/useCookies'
import { logout } from '@/utils/logout'
import HomeViewVue from '@/views/HomeView.vue'
import NProgress from '@/utils/nprogress'

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
          beforeEnter: (_from, to, next) => {
            handleUnLogin(to, next)
          },
        },
        {
          path: '/history',
          name: 'Hisrory',
          component: () => import('@/views/HistoryVideosView.vue'),
          beforeEnter: (_from, to, next) => {
            handleUnLogin(to, next)
          },
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

function handleUnLogin(to: RouteLocationNormalized, next: NavigationGuardNext) {
  const cookie = useCookies()
  const isLogin = cookie.get('bili_jct') !== undefined

  if (isLogin) {
    next()
  }
  else {
    ElMessage({
      message: 'Please login before continuing',
      grouping: true,
      type: 'warning',
      showClose: true,
    })
    next(to.path)
  }
}

router.beforeEach((_to, _from, next) => {
  NProgress.start()

  next()
})
router.afterEach(() => {
  window.scrollTo(0, 0)

  NProgress.done()
})

export default router
