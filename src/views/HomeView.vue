<script setup lang="ts">
</script>

<template>
  <MainLayouts>
    <template #Header>
      <Header />
    </template>
    <template #Aside>
      <div class="h-screen sm:w-30 md:w-60 bg-slate-200" />
    </template>
    <template #Main>
      <RouterView />
    </template>
  </MainLayouts>
</template>
