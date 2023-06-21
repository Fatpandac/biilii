import { useCookies } from '@vueuse/integrations/useCookies'

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
