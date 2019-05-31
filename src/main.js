// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';//ElementUI库
import 'element-ui/lib/theme-chalk/index.css';//ElementUI CSS样式

Vue.config.productionTip = false
Vue.use(ElementUI);//全局使用ElementUI库
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
