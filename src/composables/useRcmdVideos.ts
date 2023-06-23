import type { Video } from '@/utils/api'

export function useRcmdVideos() {
  const idx = ref(START_IDX)
  const videos = ref([] as unknown as Video[])

  async function fetchData() {
    const res = await getRcmdVideos(START_IDX)

    videos.value = res.data.item.filter(item => item.bvid)
  }

  fetchData()

  async function load() {
    const res = await getRcmdVideos(++idx.value)

    videos.value = [...videos.value, ...res.data.item.filter(item => item.bvid)]
  }

  return {
    videos,
    load,
  }
}
