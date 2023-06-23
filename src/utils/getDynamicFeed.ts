import type { BaseResponse } from './api'

export interface DynamicModuleAuthor {
  face: string
  jump_url: string
  mid: number
  name: string
  pub_ts: number
  pub_time: string
}

export interface DynamicModuleStat {
  comment: {
    count: number
  }
  forward: {
    count: number
  }
  like: {
    count: number
    status: boolean
  }
}

export interface DynamicVideoInfo {
  aid: string
  badge: {
    bg_color: string
    text: string
  }
  bvid: string
  cover: string
  desc: string
  duration_text: string
  jump_url: string
  stat: {
    danmaku: string
    play: string
  }
  title: string
  type: number
}

export interface DynamicVideo {
  id_str: string
  modules: {
    module_author: DynamicModuleAuthor
    module_dynamic: {
      type: string
      major: {
        archive: DynamicVideoInfo
      }
      desc?: {
        text: string
      }
    }
    module_stat: DynamicModuleStat
  }
  type: 'DYNAMIC_TYPE_AV'
}

export interface DynamicPost {
  id_str: string
  modules: {
    module_author: DynamicModuleAuthor
    module_dynamic: {
      desc: {
        text: string
      }
      major: {
        draw: {
          items: {
            height: number
            width: number
            src: string
          }[]
        }
      }
    }
    module_stat: DynamicModuleStat
  }
  type: 'DYNAMIC_TYPE_DRAW' | 'DYNAMIC_TYPE_WORD' | 'DYNAMIC_TYPE_FORWARD'
}

export type DynamicItem = DynamicVideo | DynamicPost

export interface DynamicFeedAllResponse extends Omit<BaseResponse, 'data'> {
  data: {
    items: DynamicItem[]
  }
}

const SUPPORTED_DYNAMIC_TYPE = ['DYNAMIC_TYPE_DRAW', 'DYNAMIC_TYPE_WORD', 'DYNAMIC_TYPE_FORWARD', 'DYNAMIC_TYPE_AV']

export async function getDynamicFeed(idx: number, offset?: string) {
  const res: DynamicFeedAllResponse = await fetch(API.dynamicFeedAll(idx, -480, offset)).then(res => res.json())
  const filteredRes = {
    ...res,
    'res.data.items': res.data.items.filter(item => SUPPORTED_DYNAMIC_TYPE.includes(item.type)),
  }

  return filteredRes
}
