// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./assets/style/scroll-bar.css"
import Vue from 'vue'
import App from './App'
import router from './router'

import vuetify from './plugins/vuetify'
import store from "./store/index"

Vue.config.productionTip = false

import Vuex from "vuex"
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App },
  template: '<App/>'
})
