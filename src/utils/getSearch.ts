import type { BaseResponse } from './api'

export interface SerachVideo {
  id: number
  author: string
  mid: number
  aid: number
  bvid: string
  title: string
  description: string
  pic: string
  play: number
  pubdate: number
  video_review: number
}

interface SearchRes extends Omit<BaseResponse, 'data'> {
  data: {
    page: number
    result: SerachVideo[]
  }
}

export async function getSearch(keyword: string, pn: number) {
  const res: SearchRes = await fetch(API.search(keyword, pn)).then(res => res.json())

  return res
}
