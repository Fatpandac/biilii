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

export async function getFollows(idx: number, id: string) {
  const res: UserFollowRes = await fetch(API.getFollows(id, idx)).then(res => res.json())

  const newRes = {
    ...res,
    data: res.data?.list || [],
  }

  return newRes
}
