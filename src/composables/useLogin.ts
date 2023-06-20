import { useQRCode } from '@vueuse/integrations/useQRCode'
import { useCookies } from '@vueuse/integrations/useCookies'

const LOGIN_COOKIE_KEYS = ['sid', 'DedeUserID__ckMd5', 'DedeUserID', 'bili_jct', 'SESSDATA']

export function useLogin() {
  const user = userStore()
  const cookies = useCookies(LOGIN_COOKIE_KEYS)

  const isLogin = ref(LOGIN_COOKIE_KEYS.map(cookieKey => cookies.get(cookieKey)).every(item => (item !== '' && item !== undefined)))
  const QRCodeURL = ref('')
  const qrcodeKey = ref('')

  // quite if logged in
  if (isLogin.value) {
    return {
      isLogin,
      QRCode: useQRCode(QRCodeURL),
    }
  }

  async function fetchData() {
    const { url, qrcode_key } = await gennerateQRCode()

    QRCodeURL.value = url
    qrcodeKey.value = qrcode_key
  }

  const interval = setInterval(async () => {
    const { res } = await checkQRCode(qrcodeKey.value)

    if (res.data.code === 86038) {
      const { url, qrcode_key } = await gennerateQRCode()

      QRCodeURL.value = url
      qrcodeKey.value = qrcode_key
    }

    if (res.data.code !== 0 && !isLogin.value)
      return {}

    isLogin.value = true
    user.fetchData()
    clearInterval(interval)
  }, 1000)

  // stop check qrcode state when component was unmount
  onBeforeUnmount(() => {
    clearInterval(interval)
  })

  fetchData()

  return {
    QRCode: useQRCode(QRCodeURL),
    isLogin,
  }
}
