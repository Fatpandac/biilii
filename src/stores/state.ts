import DynamicIconVue from '@/components/atoms/icons/DynamicIcon.vue'
import HistoryIconVue from '@/components/atoms/icons/HistoryIcon.vue'
import HomeIconVue from '@/components/atoms/icons/HomeIcon.vue'
import PopularIconVue from '@/components/atoms/icons/PopularIcon.vue'

export const ASIDE_MENU = [
  {
    title: 'Home',
    icon: markRaw(HomeIconVue),
    to: '/',
  },
  {
    title: 'Popular',
    icon: markRaw(PopularIconVue),
    to: '/popular',
  },
  {
    title: 'Dynamic',
    icon: markRaw(DynamicIconVue),
    to: '/dynamic',
  },
  {
    title: 'History',
    icon: markRaw(HistoryIconVue),
    to: '/history',
  },
]

export const START_IDX = 1

export const navStore = defineStore('nav', () => {
  const DEFAULT_CLOSE = false

  const router = useRouter()
  const showDarwer = ref(DEFAULT_CLOSE)
  const activeAsideCollapseName = ref([])

  // reset showDarwer before change route
  router.afterEach(() => {
    showDarwer.value = DEFAULT_CLOSE
  })

  return {
    showDarwer,
    activeAsideCollapseName,
  }
})
