const iframeOrigin  = 'https://www.moneybutton.com',
      iframeUrl     = `${iframeOrigin}/iframe/v2`;

export default {
  getHintForError(error, message) {
    switch(error) {
      case 'not logged in':
        return {
          title: 'Money Button',
          text: 'We believe in sound digital money for everyone in the world. Join Money Button to make this payment.',
          buttons: [
            { url: `${iframeOrigin}/register`, text: 'Sign Up', class: 'red__moneybutton' },
            { url: `${iframeOrigin}/login`, text: 'Log In', class: 'nofill__moneybutton' }
          ]
        }
      case 'insufficient balance':
        return {
          title: 'Low Balance',
          text: 'Your balance is too low to make this payment.',
          buttons: [
            { url: `${iframeOrigin}/wallet`, text: 'Add Money', class: 'red__moneybutton add__moneybutton' }
          ]
        };
      case 'compatibility':
        return {
          title: 'Compatibility',
          text: message
        };
      case 'safari privacy':
        return {
          title: 'Money Button',
          text: 'We believe in sound digital money for everyone in the world. Enable Money Button on Safari to make this payment.',
          buttons: [
            { url: 'https://blog.moneybutton.com/2018/09/24/how-to-enable-money-button-on-safari-and-ios/', text: 'Enable', class: 'red__moneybutton add__moneybutton' }
          ]
        }
      default:
        return {
          title: 'Unknown Error',
          text: error
        };
    }
  },

  iframeOrigin,
  iframeUrl
}