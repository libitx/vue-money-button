import config from 'config'

export default {
  moneyButton: null,

  load() {
    if ( !this.moneyButton ) {
      this.moneyButton = new Promise((resolve, reject) => {
        const el = document.createElement('script')
        el.type = 'text/javascript'
        el.async = true
        el.src = config.moneyButtonScript

        el.addEventListener('load', _ => resolve(window.moneyButton))
        el.addEventListener('error', reject)
        el.addEventListener('abort', reject)
        document.head.appendChild(el)
      })
    }
    return this.moneyButton
  }
}
