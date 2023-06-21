<script setup lang="ts">
</script>

<template>
  <MainLayouts>
    <template #Header>
      <Header />
    </template>
    <template #Aside>
      <Aside />
    </template>
    <template #Main>
      <RouterView />
    </template>
  </MainLayouts>
</template>
