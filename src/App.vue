<template>
  <div>
    <h1>app根组件</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { reqLogin } from './api/user/index'
onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' })
})
</script>

<style lang="scss" scoped></style>
