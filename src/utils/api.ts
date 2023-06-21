const BASE_PASSPORT_URL = '/passport'
const BASE_API_URL = '/api'

export interface BaseResponse {
  code: number
  message: string
  ttl: number
  data: {}
}
export interface uploader {
  mid: number
  name: string
  face: string
}

export interface Video {
  id: number
  uri: string
  aid: number
  bvid: string
  pic: string
  title: string
  pubdate: number
  desc: string
  duration: number
  owner: uploader
  short_link_v2: string
  stat: {
    danmaku?: number
    view?: number
    coin?: number
    like?: number
  }
  rcmd_reason: {
    content: string
  }
  short_link: string
}

export const API = {
  gennerateQRCode: () => `${BASE_PASSPORT_URL}/x/passport-login/web/qrcode/generate`,
  checkQRcodeStatus: (qrcode_key: string) => `${BASE_PASSPORT_URL}/x/passport-login/web/qrcode/poll?qrcode_key=${qrcode_key}`,
  logout: () => `${BASE_PASSPORT_URL}/login/exit/v2`,
  userInfo: () => `${BASE_API_URL}/x/web-interface/nav`,
  userStat: () => `${BASE_API_URL}/x/web-interface/nav/stat`,
  rcmdVideos: (fresh_idx_1h: number, fetch_row: number, fresh_idx: number, brush: number) =>
    `${BASE_API_URL}/x/web-interface/index/top/feed/rcmd?y_num=5&fresh_type=4&feed_version=V9&fetch_row=${fetch_row}&fresh_idx=${fresh_idx}&fresh_idx_1h=${fresh_idx_1h}&brush=${brush}&homepage_ver=1&ps=20`,
  popularVideos: (pn: number, ps: number) => `${BASE_API_URL}/x/web-interface/popular?pn=${pn}&ps=${ps}`,
}
