import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faBell, faCog, faUser, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

library.add(faUserSecret)
library.add(faBell);
library.add(faCog);
library.add(faUser);
library.add(faQuestion)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  axios,
  VueAxios,
  render: h => h(App)
}).$mount('#app')
