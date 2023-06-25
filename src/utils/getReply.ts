import type { BaseResponse } from './api'

export interface ReplyMember {
  mid: number
  uname: string
  avatar: string
}

export interface ReplyContent {
  message: string
}

export interface ReplyControl {
  sub_reply_entry_text: string
  sub_reply_title_text: string
  time_desc: string
}

export interface Reply {
  rpid: number
  oid: number
  ctime: number
  like: number
  member: ReplyMember
  content: ReplyContent
  replies: Reply[]
  reply_control: ReplyControl
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

export async function getReplyReply(idx: number, aid: string, root: string) {
  const res: ReplyRes = await fetch(API.replyReply(aid, root, idx)).then(res => res.json())

  return res
}
