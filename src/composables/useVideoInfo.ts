import type { Video } from '@/utils/api'

export function useVideoInfo(aid: string) {
  const videoInfo = ref({} as unknown as Video)

  async function fetchData() {
    const res = await getVideoInfo(aid)

    videoInfo.value = res.data
  }

  fetchData()

  return {
    videoInfo,
  }
}
