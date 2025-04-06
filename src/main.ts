import { createApp } from 'vue'
import App from '@/App.vue'
// 配置element-plus国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import ElementPlus from 'element-plus'
// 获取应用实例对象
const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置
})

// svg插件配置代码
import 'virtual:svg-icons-register'

// 将应用挂载到挂载点上
app.mount('#app')
