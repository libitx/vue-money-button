import Vue from 'vue'
import VueMoneyButton from 'index.js'
import App from './App.vue'

Vue.use(VueMoneyButton)

const app = new Vue({
  el: '#app',
  render: h => h(App)
})
