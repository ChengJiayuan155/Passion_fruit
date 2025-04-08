import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  // 新增：针对 index.vue 的特殊规则
  {
    files: ['**/*[iI]ndex.vue'], // 匹配所有 index.vue（不区分大小写）
    rules: {
      'vue/multi-word-component-names': 'off', // 关闭该规则
    },
  },
])
