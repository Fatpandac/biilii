import { useQRCode } from '@vueuse/integrations/useQRCode'
import { useCookies } from '@vueuse/integrations/useCookies'

const LOGIN_COOKIE_KEY = 'biilii'

export function useLogin() {
  const cookies = useCookies()
  const state = ref(!!cookies.get(LOGIN_COOKIE_KEY))
  const QRCodeURL = ref('')
  const qrcodeKey = ref('')

  async function fetchData() {
    const { url, qrcode_key } = await gennerateQRCode()

    QRCodeURL.value = url
    qrcodeKey.value = qrcode_key
  }

  const interval = setInterval(async () => {
    const { res, cookie } = await checkQRCode(qrcodeKey.value)

    console.log(res.data, cookie)

    if (res.data.code === 86038) {
      const { url, qrcode_key } = await gennerateQRCode()

      QRCodeURL.value = url
      qrcodeKey.value = qrcode_key
    }

    if (res.data.code !== 0 || !cookie)
      return {}

    cookies.set(LOGIN_COOKIE_KEY, cookie)
    state.value = true

    clearInterval(interval)
  }, 1000)

  fetchData()

  return {
    QRCode: useQRCode(QRCodeURL),
    state,
  }
}
