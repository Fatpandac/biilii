import type { Ref } from 'vue'
import type { Video } from '@/utils/api'

export function useVideoRelated(aid: Ref<string>) {
  const relatedVideos = ref([] as unknown as Video[])

  async function fetchData() {
    if (!aid.value)
      return

    const res = await getVideoRelate(aid.value)

    relatedVideos.value = res.data
  }

  fetchData()

  watch(aid, fetchData)

  return {
    relatedVideos,
  }
}
