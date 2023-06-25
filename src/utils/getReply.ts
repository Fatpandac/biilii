import type { BaseResponse } from './api'

export interface ReplyMember {
  mid: number
  uname: number
  avatar: string
}

export interface ReplyContent {
  message: string
}

export interface Reply {
  rpid: number
  oid: number
  ctime: number
  like: number
  member: ReplyMember
  content: ReplyContent
  replies: Reply[]
}

interface ReplyData {
  page: {
    num: number
    size: number
    count: number
    acount: number
  }
  replies: Reply[]
}

interface ReplyRes extends Omit<BaseResponse, 'data'> {
  data: ReplyData
}

export async function getReply(idx: number, aid: string) {
  const res: ReplyRes = await fetch(API.reply(aid, idx)).then(res => res.json())
  const newRes = {
    ...res,
    data: res.data?.replies || [],
  }

  return newRes
}
