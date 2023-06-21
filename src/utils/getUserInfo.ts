import type { BaseResponse } from './api'
import type { UserInfo } from '@/stores/user'

interface UserInfoRes extends Omit<BaseResponse, 'daat'> {
  data: UserInfo
}

interface UserStatRes extends Omit<BaseResponse, 'data'> {
  data: {
    following: number
    follower: number
    dynamic_count: number
  }
}

export async function getUserInfo() {
  const res: UserInfoRes = await fetch(API.userInfo()).then(res => res.json())
  const statRes: UserStatRes = await fetch(API.userStat()).then(res => res.json())

  res.data = {
    ...res.data,
    ...statRes.data,
  }

  return res
}
