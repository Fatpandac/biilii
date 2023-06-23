import type { BaseResponse } from './api'

interface Card {
  face: string
  sign: string
  mid: string
  fans: number
  name: string
}

export interface UserInfoCard {
  card: Card
  follower: number
  like_num: number
}

interface UserInfoCardRes extends Omit<BaseResponse, 'data'> {
  data: UserInfoCard
}

export async function getUserInfoCard(id: string) {
  const res: UserInfoCardRes = await fetch(API.userInfoCard(id)).then(res => res.json())

  return res
}
