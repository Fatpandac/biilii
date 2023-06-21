const BASE_PASSPORT_URL = '/passport'
const BASE_API_URL = '/api'

export interface BaseResponse {
  code: number
  message: string
  ttl: number
  data: {}
}

export const API = {
  gennerateQRCode: () => `${BASE_PASSPORT_URL}/x/passport-login/web/qrcode/generate`,
  checkQRcodeStatus: (qrcode_key: string) => `${BASE_PASSPORT_URL}/x/passport-login/web/qrcode/poll?qrcode_key=${qrcode_key}`,
  logout: () => `${BASE_PASSPORT_URL}/login/exit/v2`,
  userInfo: () => `${BASE_API_URL}/x/web-interface/nav`,
  userStat: () => `${BASE_API_URL}/x/web-interface/nav/stat`,
  rcmdVideos: (fresh_idx_1h: number, fetch_row: number, fresh_idx: number, brush: number) =>
    `https://api.bilibili.com/x/web-interface/index/top/feed/rcmd?y_num=5&fresh_type=4&feed_version=V9&fetch_row=${fetch_row}&fresh_idx=${fresh_idx}&fresh_idx_1h=${fresh_idx_1h}&brush=${brush}&homepage_ver=1&ps=20`,
}
