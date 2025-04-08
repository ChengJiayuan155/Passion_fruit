<template>
  <div>
    <svg :style="{ width, height }">
      <use :href="`${prefix}${name}`" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup>
// 接收父组件传递的参数进行动态svg展示
defineProps({
  // href属性值前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供使用的图标名字
  name: String,
  // 接收父组件传递的颜色
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style lang="scss" scoped></style>
