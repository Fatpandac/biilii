<script setup lang="ts">
import type { Follow } from '@/utils/getFollows'
import { ASIDE_MENU } from '@/stores/state'

withDefaults(
  defineProps<{
    unvariable?: boolean
  }>(),
  {
    unvariable: false,
  },
)
const { userInfo } = storeToRefs(userStore())
const { activeAsideCollapseName } = storeToRefs(navStore())
const mid = computed(() => String(userInfo.value.mid))

const { data: follows, loadmore, canLoadmore } = useDataLoadmore<Follow>(getFollows, false, mid)
</script>

<template>
  <ElScrollbar class="bg-white w-25 lg:w-60" :class="[{ 'w-60!': unvariable }]">
    <template v-for="(item, index) in ASIDE_MENU" :key="index">
      <AsideButton :to="item.to" :icon="item.icon" :title="item.title" :unvariable="unvariable" />
    </template>
    <Divider class="mx2" />
    <ElCollapse v-model="activeAsideCollapseName" class="bg-slate-200 my-collapse">
      <ElCollapseItem v-if="follows.length" name="1" class="bg-slate-200!">
        <template #title>
          <span
            class="w-3/4 overflow-hidden text-sm text-center lg:(text-lg text-left pl4) text-nowrap text-ellipsis select-none"
            :class="[{ 'text-lg! text-left! pl4!': unvariable }]"
          >Subscripts</Span>
        </template>
        <AsideButton v-for="follow in follows" :key="follow.mid" :to="`/space/${follow.mid}`" :title="follow.uname" :icon="follow.face" :unvariable="unvariable" />
        <div v-show="canLoadmore && follows.length" class="flex justify-center w-full" @click="loadmore">
          <span class="text-orange-400 cursor-pointer select-none">Show More</span>
        </div>
      </ElCollapseItem>
    </ElCollapse>
    <div class="h-20" />
  </ElScrollbar>
</template>
