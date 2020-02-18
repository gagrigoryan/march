import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
window.$ = window.jQuery = require('jquery');
import 'popper.js';
import 'bootstrap';
import './assets/app.sass';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add()

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
