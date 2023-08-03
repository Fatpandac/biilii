<script setup lang="ts">
const route = useRoute()
const isKeepAlive = computed(() => route.meta.keepAlive)
</script>

<template>
  <MainLayout>
    <template #Header>
      <Header />
    </template>
    <template #Aside>
      <Aside />
    </template>
    <template #Main>
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" v-if="isKeepAlive" />
        </KeepAlive>
        <component :is="Component" v-if="!isKeepAlive" />
      </RouterView>
    </template>
  </MainLayout>
</template>
