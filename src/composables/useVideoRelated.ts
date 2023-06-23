import type { Ref } from 'vue'
import type { Video } from '@/utils/api'
import { getVideoRelate } from '@/utils/getVideoRelated'

export function useVideoRelated(aid: Ref<string>) {
  const relatedVideos = ref([] as unknown as Video[])

  async function fetchData() {
    const res = await getVideoRelate(aid.value)

    relatedVideos.value = res.data
  }

  watch(aid, () => {
    fetchData()
  })

  fetchData()

  return {
    relatedVideos,
  }
}
