<template>
  <div>
    <h1>我是app</h1>
    <el-button type="primary" :icon="Edit">Primary</el-button>
  </div>
  <div class="demo-pagination-block">
    <div class="demonstration">All combined</div>
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      :size="size"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
  </div>
  <Test></Test>
  <!-- 测试svg图标 -->
  <!-- svg:图标外层容器，内部需要与use结合使用 -->
  <svg>
    <!-- xlink:href指定用哪一个图标 -->
    <use href="#icon-phone"></use>
  </svg>
</template>

<script setup>
import { Edit } from '@element-plus/icons-vue'
import Test from '@/components/Test-01.vue'
console.log(import.meta.env)
</script>
<style lang="scss" scoped></style>
