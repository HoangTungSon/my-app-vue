import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  VueAxios,
  render: h => h(App)
}).$mount('#app')
