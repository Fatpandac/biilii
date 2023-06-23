<script setup lang="ts">
const input = ref('')
</script>

<template>
  <div class="border-black rounded-full w-60 md:w-80 h-3/5 border-1">
    <ElInput v-model="input" class="w-full h-full rounded-full" clearable>
      <template #append>
        <SearchIcon class="w-6 h-6" />
      </template>
    </ElInput>
  </div>
</template>
