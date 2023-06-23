import type { BaseResponse, Video } from './api'

interface VideoRelateResponse extends Omit<BaseResponse, 'data'> {
  data: Video[]
}

export async function getVideoRelate(id: string) {
  const res: VideoRelateResponse = await fetch(API.videoRelated(id)).then(res => res.json())

  return res
}
