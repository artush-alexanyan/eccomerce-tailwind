import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router   from './router/router'

import {fas} from "@fortawesome/free-solid-svg-icons";

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
