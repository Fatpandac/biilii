import type { BaseResponse } from './api'

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
