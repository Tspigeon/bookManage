import Vue from 'vue'
import App from './App.vue'
import { Input, Button, Table, TableColumn, Menu, MenuItem, Submenu, Image, Select, Option, Checkbox } from 'element-ui';
//引入elementui

//引入路由
import VueRouter from "vue-router";
//引入路由器
import router from './router'
//引入vue-resource
import VueResource from 'vue-resource'
//引入store
import store from './store'//因为index.js是默认文件，所以只写文件夹的名字

// import { header } from 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

//在vue中使用elementui
Vue.use(Input);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn)
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Image);
Vue.use(Select);
Vue.use(Option);
Vue.use(Checkbox)

Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  //render实现App的载入
  render: h => h(App),
  //传入store配置项
  store,
  router: router,
})

