import type { ComputedRef, Ref } from 'vue'
import type { BaseResponse } from '@/utils/api'

interface UseDataReturn<T> {
  data: Ref<T | undefined>
}

interface FetchResponse<T> extends Omit<BaseResponse, 'data'> {
  data: T
}

export function useDataWithAid<T, U>(aid: Ref<U> | ComputedRef<U>, fetchFuc: (aid: string) => Promise<FetchResponse<T>>): UseDataReturn<T> {
  const data = ref<T>()

  async function fetchData() {
    if (!aid.value)
      return

    const res = await fetchFuc(String(aid.value))

    data.value = res.data
  }

  watch(aid, () => {
    fetchData()
  })

  fetchData()

  return {
    data,
  }
}
