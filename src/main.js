import Vue from 'vue'
import router from './router'
import App from './App.vue'
window.$ = window.jQuery = require('jquery');
import 'popper.js';
import 'bootstrap';
import './assets/app.sass';



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
