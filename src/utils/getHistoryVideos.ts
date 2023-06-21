import type { BaseResponse, Video } from './api'

interface HistoryVideosResponse extends Omit<BaseResponse, 'data'> {
  data: Video[]
}

export async function getHistoryVideos(idx: number) {
  const res: HistoryVideosResponse = await fetch(API.historyVideos(idx, 20)).then(res => res.json())

  return res
}
