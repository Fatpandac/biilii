import type { BaseResponse } from './api'

export interface Follow {
  mid: number
  attribute: number
  special: number
  uname: string
  face: string
}

interface UserFollowRes extends Omit<BaseResponse, 'data'> {
  data: {
    list: Follow[]
    total: number
  }
}

export async function getFollows(id: string, idx: number) {
  const res: UserFollowRes = await fetch(API.getFollows(id, idx)).then(res => res.json())

  return res
}
