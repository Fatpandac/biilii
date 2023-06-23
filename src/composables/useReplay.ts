import type { Reply } from './../utils/getReply'

export function useVideoReplay(aid: string) {
  const idx = ref(START_IDX)
  const canLoadMore = ref(true)
  const replies = ref([] as unknown as Reply[])

  async function fetchData() {
    const res = await getReply(aid, idx.value)

    replies.value = res.data.replies
  }

  fetchData()

  async function load() {
    const res = await getReply(aid, ++idx.value)

    if (res.data.replies.length === 0)
      canLoadMore.value = false

    replies.value = [
      ...replies.value,
      ...res.data.replies,
    ]
  }

  return {
    replies,
    load,
    canLoadMore,
  }
}
