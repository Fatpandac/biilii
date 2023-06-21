import type { Video } from '@/utils/api'

export function usePopularVideos() {
  const videos = ref({} as unknown as Video[])

  async function fetchData() {
    const res = await getPopurlarVideos(VIDEOS_START_IDX)

    videos.value = res.data.list.filter(item => item.bvid)
  }

  fetchData()

  async function load(idx: number) {
    const res = await getPopurlarVideos(idx)

    videos.value = [...videos.value, ...res.data.list.filter(item => item.bvid)]
  }

  return {
    videos,
    load,
  }
}
