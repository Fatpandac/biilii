import type { Ref } from 'vue'
import type { SerachVideo } from '@/utils/getSearch'

export function useSearch(keyword: Ref<string>) {
  const searchVideoRes = ref([] as unknown as SerachVideo[])
  const idx = ref(START_IDX)

  async function fetchData() {
    const res = await getSearch(keyword.value, idx.value)

    searchVideoRes.value = res.data.result
  }

  fetchData()

  // reset index if keyword is changed
  watch(keyword, () => {
    idx.value = START_IDX
    fetchData()
  })

  async function load() {
    const res = await getSearch(keyword.value, idx.value)

    if (res.data.result.length === 0)
      return

    searchVideoRes.value = [
      ...searchVideoRes.value,
      ...res.data.result,
    ]
  }

  return {
    searchVideoRes,
    load,
  }
}
