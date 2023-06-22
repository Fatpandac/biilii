import type { DynamicItem } from '@/utils/getDynamicFeed'

export function useDynamicFeed() {
  const dynamicItems = ref([] as unknown as DynamicItem[])
  const offset = computed(() => dynamicItems.value[dynamicItems.value.length - 1].id_str)

  async function fetchData() {
    const res = await getDynamicFeed(START_IDX)

    dynamicItems.value = res.data.items
  }

  fetchData()

  async function load(idx: number) {
    const res = await getDynamicFeed(idx, offset.value)

    // is End
    if (!res.data)
      return

    dynamicItems.value = [...dynamicItems.value, ...res.data.items]
  }

  return {
    dynamicItems,
    load,
  }
}
