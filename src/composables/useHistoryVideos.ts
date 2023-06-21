import type { Video } from '@/utils/api'

export function useHistoryVideos() {
  const videos = ref({} as unknown as Video[])

  async function fetchData() {
    const res = await getHistoryVideos(VIDEOS_START_IDX)

    videos.value = res.data.filter(item => item.bvid)
  }

  fetchData()

  async function load(idx: number) {
    const res = await getHistoryVideos(idx)

    videos.value = [...videos.value, ...res.data.filter(item => item.bvid)]
  }

  return {
    videos,
    load,
  }
}
