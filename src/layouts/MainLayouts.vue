<script setup lang="ts">

</script>

<template>
  <div class="relative flex flex-col">
    <slot name="Header" />
    <div class="flex w-screen">
      <slot name="Aside" />
      <slot name="Main" />
    </div>
  </div>
</template>
