import type { BaseResponse } from './api'

export interface DynamicModuleAuthor {
  face: string
  jump_url: string
  mid: number
  name: string
  pub_ts: number
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

export interface DynamicVideo {
  id_str: string
  modules: {
    module_author: DynamicModuleAuthor
    module_dynamic: {
      type: string
      major: {
        archive: {
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
      }
    }
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

export interface DynamicMusic {
  id_str: string
  modules: {
    module_author: DynamicModuleAuthor
    module_dynamic: {
      major: {
        music: {
          cover: string
          id: number
          jump_url: string
          title: string
        }
      }
      desc: {
        text: string
      }
    }
    module_stat: DynamicModuleStat
  }
  type: 'DYNAMIC_TYPE_MUSIC'
}

export interface DynamicLive {
  id_str: string
  modules: {
    module_author: DynamicModuleAuthor
    module_dynamic: {
      major: {
        live_rcmd: {
          content: string
        }
      }
    }
    module_stat: DynamicModuleStat
  }
  type: 'DYNAMIC_TYPE_LIVE_RCMD'
}

export type DynamicItem = DynamicVideo | DynamicPost | DynamicMusic | DynamicLive

export interface DynamicFeedAllResponse extends Omit<BaseResponse, 'data'> {
  data: {
    items: DynamicItem[]
  }
}

export async function getDynamicFeed(idx: number, offset?: string) {
  const res: DynamicFeedAllResponse = await fetch(API.dynamicFeedAll(idx, -480, offset)).then(res => res.json())

  return res
}
