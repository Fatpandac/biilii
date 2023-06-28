import type { ComputedRef, Ref } from 'vue'
import type { BaseResponse } from '@/utils/api'

interface UseDataReturn<T> {
  data: Ref<T | undefined>
  isLoading: Ref<boolean>
}

interface FetchResponse<T> extends Omit<BaseResponse, 'data'> {
  data: T
}

export function useDataWithAid<T, U>(aid: Ref<U> | ComputedRef<U>, fetchFuc: (aid: string) => Promise<FetchResponse<T>>): UseDataReturn<T> {
  const data = ref<T>()
  const isLoading = ref(false)

  async function fetchData() {
    if (!aid.value)
      return

    isLoading.value = true
    const res = await fetchFuc(String(aid.value))

    data.value = res.data
    isLoading.value = false
  }

  watch(aid, () => {
    fetchData()
  })

  fetchData()

  return {
    data,
    isLoading,
  }
}
