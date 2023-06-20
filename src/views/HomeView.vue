<script setup lang="ts">
const { isLogin } = useLogin()
</script>

<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen ms-center fel">
    <h1>This is MainView</h1>
    <h2>{{ isLogin && 'Logged in 🎉' }}</h2>
    <RouterLink to="/login">
      <button>Login</button>
    </RouterLink>
    <RouterLink to="/logout">
      <button>Logout</button>
    </RouterLink>
  </div>
</template>
