<template>
  <div id="app">
    <h1>Vue.js Unofficial MoneyButton Component</h1>

    <p>A simple Vue.js component for rendering MoneyButton. Any of the properties can be changed dynamically, causing a reload of the MoneyButton iframe.</p>

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
      :label="label"
      clientIdentifier="eaca95f6eca089c4029ca9d3e0c3e86b"
      buttonId="1537033178492"

      @payment="onPayment"
      @error="onError"
    />

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
  </div>
</template>

<script>
import MoneyButton from 'components/MoneyButton.vue'

export default {
  data() {
    return {
      amount: '0.5',
      label: 'Buy me'
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