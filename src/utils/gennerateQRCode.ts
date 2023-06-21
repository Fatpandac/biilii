import type { BaseResponse } from './api'

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
