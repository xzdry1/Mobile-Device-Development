import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
//vue-awesome-swiper实现轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//import css
import './style/reset.css' //统一不同手机样式
import './style/border.css'//解决1px边框问题
//iconfont图标库
import './style/iconfont/iconfont.css'
//解决移动端click 300s延时
import fastClick from 'fastclick';



//vuex
import store from './store'
Vue.config.productionTip = false
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
