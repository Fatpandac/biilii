import type { BaseResponse } from './api'

export interface PlayUrlResponse extends Omit<BaseResponse, 'data'> {
  data: VideoURLData
}

export interface VideoURLData {
  from: string
  result: string
  message: string
  quality: number
  format: string
  timelength: number
  accept_format: string
  accept_description: string[]
  accept_quality: number[]
  video_codecid: number
  seek_param: string
  seek_type: string
  durl: Durl[]
  support_formats: SupportFormat[]
  high_format: any
  last_play_time: number
  last_play_cid: number
}

export interface Durl {
  order: number
  length: number
  size: number
  ahead: string
  vhead: string
  url: string
  backup_url: string[]
}

export interface SupportFormat {
  quality: number
  format: string
  new_description: string
  display_desc: string
  superscript: string
  codecs: any
}

export async function getPlayUrl(avid: string, cid: string) {
  const res = await fetch(API.getPlayUrl(avid, cid)).then(res => res.json())

  return res
}
