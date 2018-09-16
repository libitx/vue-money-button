export default {
  bind(el, binding, vnode) {
    const domain = vnode.context.$options.domain;
    
    window.addEventListener('message', (e) => {
      if ( e.source === el.contentWindow ) {
        const { error, size, payment} = e.data;
        console.log('money-button: Received message', e.data)
        
        if ( e.origin !== domain) {
          return void console.log(`money-button: postMessage: wrong origin: ${e.origin} should be ${domain}`);
        }

        // If error
        if ( error ) {
          vnode.context.handleError(error)
          vnode.context.$emit('error', error)

        // If resize
        } else if ( size ) {
          vnode.context.resize(size)

        // If payment
        } else if ( payment ) {
          vnode.context.$emit('payment', payment)
        }
      }
    })
  }
}