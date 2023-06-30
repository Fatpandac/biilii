<template>
  <MainLayout>
    <template #Header>
      <Header />
    </template>
    <template #Aside>
      <Aside />
    </template>
    <template #Main>
      <RouterView />
    </template>
  </MainLayout>
</template>
