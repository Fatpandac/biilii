import type { Video } from '@/utils/api'

export function useRcmdVideos() {
  const videos = ref({} as unknown as Video[])

  async function fetchData() {
    const res = await getRcmd(0)

    videos.value = res.data.item.filter(item => item.bvid)
  }

  fetchData()

  async function load(idx: number) {
    const res = await getRcmd(idx)

    videos.value = [...videos.value, ...res.data.item.filter(item => item.bvid)]
  }

  return {
    videos,
    load,
  }
}
