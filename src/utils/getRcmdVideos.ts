import type { BaseResponse, Video } from './api'

interface RcmdVideosResponse extends Omit<BaseResponse, 'data'> {
  data: {
    item: Video[]
  }
}

export async function getRcmdVideos(idx: number) {
  const fetch_row = idx * 4
  const fresh_idx_1h = idx
  const fresh_idx = idx
  const brush = idx

  const res: RcmdVideosResponse = await fetch(API.rcmdVideos(fresh_idx_1h, fetch_row, fresh_idx, brush)).then(res => res.json())

  return res
}
