import type { BaseResponse, Video } from './api'

interface VideoInfoResponse extends Omit<BaseResponse, 'data'> {
  data: Video
}

export async function getVideoInfo(id: string) {
  const res: VideoInfoResponse = await fetch(API.videoInfo(id)).then(res => res.json())

  return res
}
