import config from 'config'

export default {
  promise: null,
  src: config.moneyButtonScript,

  load() {
    if ( !this.promise ) {
      console.log('init script')
      this.promise = new Promise((resolve, reject) => {
        const el = document.createElement('script');
        el.type = 'text/javascript';
        el.async = true;
        el.src = this.src;

        el.addEventListener('load', _ => resolve(window.moneyButton));
        el.addEventListener('error', reject);
        el.addEventListener('abort', reject);
        document.head.appendChild(el);
      })
    }

    console.log('returning promise')
    return this.promise;
  }
}
