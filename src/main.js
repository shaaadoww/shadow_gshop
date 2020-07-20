/*
  入口js文件
*/
import Vue from 'vue';
import {Button} from 'mint-ui';
import App from './App';
import router from './router';
import store from "./store";

import './mock/mockServer' // 加载mockServer即可
import loading from './common/imgs/loading.gif';
import VueLazyload from "vue-lazyload";
import './filters';

//注册全局组件标签
Vue.component(Button.name, Button);// mt-button

Vue.use(VueLazyload,{ // 内容自定义了一个指令lazy，使用的时候写成v-lazy，就可以加载loading图了
  loading
})

new Vue({
  el: '#app',
  render: h => h(App), // 挂载app
  //Vue 选项中的 render 函数若存在，则 Vue 构造函数不会从 template 选项或通过 el 选项指定的挂载元素中提取出的 HTML 模板编译渲染函数。
  router, //使用上vue-router
  store //使用上vuex
})
