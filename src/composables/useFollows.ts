import type { Ref } from 'vue'
import type { Follow } from '@/utils/getFollows'

export function useFollows(mid: Ref<string>) {
  const follows = ref([] as unknown as Follow[])
  const idx = ref(START_IDX)
  const canLoadMore = ref(true)
  const total = ref(0)

  async function fetchData() {
    if (!mid.value)
      return

    const res = await getFollows(mid.value, idx.value)

    if (!res.data)
      return

    follows.value = res.data.list
    total.value = res.data.total
  }

  fetchData()

  watch(mid, () => {
    fetchData()
  })

  async function load() {
    const res = await getFollows(mid.value, ++idx.value)

    // is End
    if (res.data.list.length === 0) {
      canLoadMore.value = false
      return
    }

    follows.value = [...follows.value, ...res.data.list]
  }

  return {
    follows,
    load,
    canLoadMore,
  }
}
