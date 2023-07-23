import type { ComputedRef, Ref } from 'vue'
import { type VideoURLData, getPlayUrl } from '@/utils/getPlayurl'

export function usePlayURL(aid: Ref<string> | ComputedRef<string>, cid: Ref<string> | ComputedRef<string>) {
  const data = ref<VideoURLData>()
  const isLoading = ref(false)

  async function fetchData() {
    if (!aid.value || !cid.value)
      return

    isLoading.value = true
    const res = await getPlayUrl(aid.value, cid.value)

    data.value = res.data
    isLoading.value = false
  }

  watch(aid, () => {
    fetchData()
  })

  watch(cid, () => {
    fetchData()
  })

  fetchData()

  return {
    data,
    isLoading,
  }
}
