import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import moment from 'moment'

// Config
Vue.config.productionTip = false

// Prototypes
Vue.prototype.moment = moment

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
