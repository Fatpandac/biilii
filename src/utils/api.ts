import { useCookies } from '@vueuse/integrations/useCookies'
import type { UserInfo } from '@/stores/user'

const BASE_PASSPORT_URL = '/passport'
const BASE_API_URL = '/api'

const API = {
  gennerateQRCode: () => `${BASE_PASSPORT_URL}/x/passport-login/web/qrcode/generate`,
  checkQRcodeStatus: (qrcode_key: string) => `${BASE_PASSPORT_URL}/x/passport-login/web/qrcode/poll?qrcode_key=${qrcode_key}`,
  logout: () => `${BASE_PASSPORT_URL}/login/exit/v2`,
  userInfo: () => `${BASE_API_URL}/x/web-interface/nav`,
  userStat: () => `${BASE_API_URL}/x/web-interface/nav/stat`,
}

interface BaseResponse {
  code: number
  message: string
  ttl: number
  data: {}
}

interface GennerateQRCodeResponse extends Omit<BaseResponse, 'data'> {
  data: {
    url: string
    qrcode_key: string
  }
}

export async function gennerateQRCode() {
  const res: GennerateQRCodeResponse = await fetch(API.gennerateQRCode()).then(res => res.json())

  if (res.code !== 0)
    throw new Error(res.message)

  const { url, qrcode_key } = res.data

  return { url, qrcode_key }
}

interface CheckQRCodeResponse extends Omit<BaseResponse, 'data'> {
  data: {
    url: string
    refresh_token: string
    timestamp: number
    code: number
    message: string
  }
}

export async function checkQRCode(qrcodeKey: string) {
  const res = await fetch(API.checkQRcodeStatus(qrcodeKey))

  return { res: await res.json() as CheckQRCodeResponse, cookie: res.headers.get('set-cookie') }
}

export async function logout() {
  const cookies = useCookies()
  const res = await fetch(API.logout(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `biliCSRF=${cookies.get('bili_jct')}`,
  }).then(res => res.json())

  return res
}

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
