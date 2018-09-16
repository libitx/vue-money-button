<template>
  <div id="app">
    <h1>Vue.js Money Button Component Demo</h1>

    <p>An unofficial Vue.js component for the Money Button. This library allows Money Button to be used in Vue.js projects and benefit from reactive properties.</p>

    <h3>Demo</h3>

    <form>
      <div class="dt">
        <label class="dtc">Amount: </label>
        <div class="dtc">
          <input type="text" :value="amount" @change="amount = $event.target.value">
        </div>
      </div>
      <div class="dt">
        <label class="dtc">Label: </label>
        <div class="dtc">
          <input type="text" :value="label" @change="label = $event.target.value">
        </div>
      </div>
    </form>

    <MoneyButton
      to="74"
      :amount="amount"
      :label="tipLabel"
      type="tip"

      @payment="onPayment"
      @error="onError"
    />

    <p><em>Disclaimer: This is a real Money Button. Sliding it will send me money.</em></p>

    <h3>Example</h3>

    <pre><code>&#60;MoneyButton
  to="74"               // String, required
  amount="0.01"         // String or Number, required
  currency="USD"        // String, defaults to USD
  label="Buy this now"  // String, required
  hideAmount=""         // Boolean, defaults to false
  opReturn=""           // String, defaults to null
  outputs=""            // Stringified JSON list of output objects, defaults to '[]'
  clientIdentifier=""   // String, defaults to null
  buttonId=""           // String, defaults to null
  buttonData=""         // String, defaults to null
  type="buy"            // 'buy' or 'tip', defaults to 'buy'

  @payment="onPayment"  // event handler
  @error="onError"      // event handler
/&#62;</code></pre>

    <h3>Find out more</h3>

    <ul>
      <li><a href="https://github.com/libitx/vue-money-button">Source code</a></li>
      <li><a href="https://www.moneybutton.com/">Money Button website</a></li>
      <li><a href="https://docs.moneybutton.com/">Money Button docs</a></li>
    </ul>
  </div>
</template>

<script>
import MoneyButton from 'components/MoneyButton.vue'

export default {
  data() {
    return {
      amount: '1',
      label: 'Tip Libby'
    }
  },

  computed: {
    tipLabel() {
      return `$${ this.amount } ${ this.label }`;
    }
  },

  methods: {
    onPayment(payment) {
      console.log('onPayment event:', payment)
    },
    onError(error) {
      console.log('onError event:', error)
    }
  },

  components: {
    MoneyButton
  }
}
</script>

<style scoped>
h1 {
  margin-top: 0;
  margin-bottom: 20px;
}

h3 {
  margin-top: 30px;
  margin-bottom: 10px;
}

p {
  margin: 16px 0;
}

ul {
  padding-left: 0;
  line-height: 1.5em;
  list-style-position: inside;
}

a {
  color: #357EDD;
  text-decoration: none;
}

a:hover {
  color: #E7040F;
}

form {
  margin-bottom: 30px;
}

label {
  width: 70px;
  padding-right: 6px;
  font-size: 14px;
  line-height: 32px;
}

input {
  height: 32px;
  padding: 2px 6px;
  width: 100%;
  max-width: 280px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #6a6a6a;
  background-color: #eee;
  border: 3px solid #eee;
  border-radius: 3px;
  outline: none;
}

input:focus {
  color: #E7040F;
  border-color: #96CCFF;
}

pre {
  margin: 0;
  padding: 20px;
  font-family: monospace;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #FFFCEB;
  background-color: #333;
  border-radius: 3px;
}

.dt {
  display: table;
  width: 100%;
  margin-bottom: 6px;
}

.dtc {
  display: table-cell;
}

</style>