import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// reset.css ==> 重置样式
import './assets/css/reset.css'
//fastclick ==> 解决click事件在移动端300ms延迟的问题
import FastClick from 'fastclick'
FastClick.attach(document.body);
// 引入字体图标
import './assets/css/iconfont.css'
//引入适配font.js文件
import './assets/js/font'
//引入swiper 
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
