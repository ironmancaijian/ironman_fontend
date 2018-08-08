// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import http from '@/utils/http.js'
// import moment from 'moment'
// import 'animate.css'
// import wx from 'weixin-js-sdk'

Vue.config.productionTip = false
// Vue.prototype.$wx = wx
Vue.prototype.$http = http

Vue.filter('time',function(val){
  return moment(val).format('YYYY/MM/DD HH:mm:ss')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
