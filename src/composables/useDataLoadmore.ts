import type { Ref } from 'vue'
import type { BaseResponse } from '@/utils/api'
import type { DynamicItem } from '@/utils/getDynamicFeed'

interface UseDataLoadmoreReturn<T> {
  data: Ref<T>
  loadmore: () => void
  canLoadmore: Ref<boolean>
  isLoading: Ref<boolean>
}

interface FetchResponse<T> extends Omit<BaseResponse, 'data'> {
  data: T
}

interface FetchFunc<T> {
  (idx: number): Promise<FetchResponse<T[]>>
}
interface FetchFuncWithOffset<T> {
  (idx: number, offset?: string): Promise<FetchResponse<T[]>>
}

interface FetchFuncWithId<T> {
  (idx: number, aid: string): Promise<FetchResponse<T[]>>
}

export function useDataLoadmore<T>(fetchFunc: FetchFunc<T> | FetchFuncWithOffset<T> | FetchFuncWithId<T>, withOffset = false, id?: Ref<string>): UseDataLoadmoreReturn<T[]> {
  const idx = ref(START_IDX)
  const data = ref<T[]>([]) as Ref<T[]>
  const canLoadmore = ref(true)
  const offset = computed(() => (data.value[(data.value.length) - 1] as DynamicItem)?.id_str)
  const isLoading = ref(false)

  const func = (idx: number) => (withOffset
    ? (fetchFunc as FetchFuncWithOffset<T>)(idx, offset.value)
    : id
      ? (fetchFunc as FetchFuncWithId<T>)(idx, id.value)
      : (fetchFunc as FetchFunc<T>)(idx))

  async function fetchData() {
    isLoading.value = true
    try {
      const res = await func(idx.value)

      data.value = res.data || []
    }
    finally {
      isLoading.value = false
    }
  }

  fetchData()

  id && watch(id, fetchData)

  async function loadmore() {
    let res

    isLoading.value = true
    if (canLoadmore.value) {
      try {
        res = await func(++idx.value)
      }
      finally {
        isLoading.value = false
      }
    }
    else {
      isLoading.value = false
      return
    }

    if (res.data?.length === 0 || !res.data)
      canLoadmore.value = false

    if (res.data)
      data.value = [...data.value as T[], ...res.data]
    isLoading.value = false
  }

  return {
    data,
    loadmore,
    canLoadmore,
    isLoading,
  }
}
