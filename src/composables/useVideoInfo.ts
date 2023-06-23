import type { Ref } from 'vue'
import type { Video } from '@/utils/api'

export function useVideoInfo(aid: Ref<string>) {
  const videoInfo = ref({} as unknown as Video)

  async function fetchData() {
    const res = await getVideoInfo(aid.value)

    videoInfo.value = res.data
  }

  watch(aid, () => {
    fetchData()
  })

  fetchData()

  return {
    videoInfo,
  }
}
