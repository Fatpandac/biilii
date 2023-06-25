import type { Ref } from 'vue'
import type { BaseResponse } from '@/utils/api'
import type { DynamicItem } from '@/utils/getDynamicFeed'

interface UseDataLoadmoreReturn<T> {
  data: Ref<T>
  loadmore: () => void
  canLoadmore: Ref<boolean>
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

  const func = () => (withOffset
    ? (fetchFunc as FetchFuncWithOffset<T>)(idx.value++, offset.value)
    : id
      ? (fetchFunc as FetchFuncWithId<T>)(idx.value++, id.value)
      : (fetchFunc as FetchFunc<T>)(idx.value++))

  async function fetchData() {
    const res = await func()

    data.value = res.data
  }

  fetchData()

  id && watch(id, fetchData)

  async function loadmore() {
    let res

    if (canLoadmore.value)
      res = await func()
    else return

    if (res.data?.length === 0 || !res.data)
      canLoadmore.value = false

    if (res.data)
      data.value = [...data.value as T[], ...res.data]
  }

  return {
    data,
    loadmore,
    canLoadmore,
  }
}
