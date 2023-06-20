import { useCookies } from '@vueuse/integrations/useCookies'

const baseURL = '/passport'

const API = {
  gennerateQRCode: () => `${baseURL}/x/passport-login/web/qrcode/generate`,
  checkQRcodeStatus: (qrcode_key: string) => `${baseURL}/x/passport-login/web/qrcode/poll?qrcode_key=${qrcode_key}`,
  logout: () => `${baseURL}/login/exit/v2`,
}

interface GennerateQRCodeResponse {
  code: number
  data: {
    url: string
    qrcode_key: string
  }
  message: string
  ttl: number
}

interface CheckQRCodeResponse {
  code: number
  message: string
  data: {
    url: string
    refresh_token: string
    timestamp: number
    code: number
    message: string
  }
}

export async function gennerateQRCode() {
  const res: GennerateQRCodeResponse = await fetch(API.gennerateQRCode()).then(res => res.json())

  if (res.code !== 0)
    throw new Error(res.message)

  const { url, qrcode_key } = res.data

  return { url, qrcode_key }
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
