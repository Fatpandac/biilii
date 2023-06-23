import type { Ref } from 'vue'
import type { UserInfoCard } from '@/utils/getUserInfoCard'

export function useUserInfoCard(aid: Ref<number>) {
  const userInfoCard = ref({} as unknown as UserInfoCard)

  async function fetchData() {
    if (!aid.value)
      return

    const res = await getUserInfoCard(String(aid.value))

    userInfoCard.value = res.data
  }

  watch(aid, () => {
    fetchData()
  })

  fetchData()

  return {
    userInfoCard,
  }
}
