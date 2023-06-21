import type { BaseResponse, Video } from './api'

interface PopularVideosResponse extends Omit<BaseResponse, 'data'> {
  data: {
    list: Video[]
    no_more: boolean
  }
}

export async function getPopurlarVideos(idx: number) {
  const res: PopularVideosResponse = await fetch(API.popularVideos(idx, 20)).then(res => res.json())

  return res
}
