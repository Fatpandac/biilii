import type { Video } from '@/utils/api'

export function useHistoryVideos() {
  const videos = ref([] as unknown as Video[])

  async function fetchData() {
    const res = await getHistoryVideos(START_IDX)

    videos.value = res.data.filter(item => item.bvid)
  }

  fetchData()

  async function load(idx: number) {
    const res = await getHistoryVideos(idx)

    // is End
    if (!res.data)
      return

    videos.value = [...videos.value, ...res.data.filter(item => item.bvid)]
  }

  return {
    videos,
    load,
  }
}
