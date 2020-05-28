/*
  入口js文件
*/
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
  el: '#app',
  render: h => h(App),
  //Vue 选项中的 render 函数若存在，则 Vue 构造函数不会从 template 选项或通过 el 选项指定的挂载元素中提取出的 HTML 模板编译渲染函数。
  router
})
