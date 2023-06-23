import type { Video } from '@/utils/api'
import { getVideoRelate } from '@/utils/getVideoRelated'

export function useVideoRelated(aid: string) {
  const relatedVideos = ref([] as unknown as Video[])

  async function fetchData() {
    const res = await getVideoRelate(aid)

    relatedVideos.value = res.data
  }

  fetchData()

  return {
    relatedVideos,
  }
}
