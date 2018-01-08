// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/css/vuxui.css'
import './assets/css/icon.css'
import axios from 'axios'
import 'lib-flexible'
import { ToastPlugin } from 'vux'
import { LoadingPlugin } from 'vux'
import { ConfirmPlugin } from 'vux'

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.router = router
/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
