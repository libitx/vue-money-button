import MoneyButton from './components/MoneyButton.vue'
import scriptLoader from './script-loader'

export default {
  install(Vue) {
    Vue.component('MoneyButton', MoneyButton)
    Vue.prototype.$getMoneyButton = scriptLoader.load
  }
}

export { MoneyButton }