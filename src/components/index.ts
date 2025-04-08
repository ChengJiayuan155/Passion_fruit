// 引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
import TestT01 from './Test-t01.vue'

// 全局对象
const allGloablComponents = { SvgIcon, TestT01 }
// 对外暴露插件对象
export default {
  // 务必叫做install方法
  install(app) {
    // 注册项目全部的全局组件
    Object.keys(allGloablComponents).forEach(key => {
      app.component(key, allGloablComponents[key])
    })
  }
}