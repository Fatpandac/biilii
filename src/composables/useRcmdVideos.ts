import type { Video } from '@/utils/api'

export function useRcmdVideos() {
  const videos = ref([] as unknown as Video[])

  async function fetchData() {
    const res = await getRcmdVideos(START_IDX)

    videos.value = res.data.item.filter(item => item.bvid)
  }

  fetchData()

  async function load(idx: number) {
    const res = await getRcmdVideos(idx)

    videos.value = [...videos.value, ...res.data.item.filter(item => item.bvid)]
  }

  return {
    videos,
    load,
  }
}
