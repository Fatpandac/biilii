import type { BaseResponse } from './api'

export interface UserInfoCard {
  card: object
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
