import MoneyButton from './components/MoneyButton.vue'
import scriptLoader from './script-loader'

export default {
  install(app) {
    app.component('MoneyButton', MoneyButton)
    // Vue v3.x
    if (app.version.substr(0, 1) >= 3) {
      app.config.globalProperties.$getMoneyButton = scriptLoader.load
    // Vue v2.x
    } else {
      app.prototype.$getMoneyButton = scriptLoader.load
    }
  }
}

export { MoneyButton }