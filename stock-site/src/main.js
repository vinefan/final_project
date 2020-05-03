import Vue from 'vue'
import App from './App.vue'
import axios from 'axios' //添加
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SlideVerify from 'vue-monoplasty-slide-verify';
import VueRouter from 'vue-router'
import router from './router'


Vue.use(VueRouter)
Vue.use(SlideVerify);
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
