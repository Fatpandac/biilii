<template>
  <ElContainer>
    <ElHeader class="bg-slate-300">
      <slot name="Header" />
    </ElHeader>
    <ElMain>
      <slot name="Main" />
    </ElMain>
    <DarwerAside unvariable />
  </ElContainer>
</template>
