<template>
  <div ref="button" />
</template>

<script>
import config from 'config'
import scriptLoader from 'script-loader'

export default {
  props: {
    to:               [String, Number],
    amount:           [String, Number],
    editable:         { type: Boolean, default: undefined },
    currency:         { type: String, default: 'USD' },
    label:            { type: String, required: true },
    successMessage:   String,
    opReturn:         String,
    outputs:          { type: Array, default: () => [] },
    clientIdentifier: String,
    buttonId:         true,
    buttonData:       true,
    type:             { type: String, default: 'buy' },
    devMode:          { type: Boolean, default: undefined },
    disabled:         { type: Boolean, default: undefined }
  },

  computed: {
    params() {
      return {
        to:               this.to,
        amount:           this.amount,
        editable:         this.editable,
        currency:         this.outputs.length ? undefined : this.currency,
        label:            this.label,
        successMessage:   this.successMessage,
        opReturn:         this.opReturn,
        outputs:          this.outputs.length ? JSON.stringify(this.outputs) : undefined,
        clientIdentifier: this.clientIdentifier,
        buttonId:         this.buttonId,
        buttonData:       this.buttonData,
        type:             this.type,
        devMode:          this.devMode,
        disabled:         this.disabled,
        onPayment:        (...args) => { this.$emit('payment', ...args) },
        onError:          (...args) => { this.$emit('error', ...args) }
      }
    }
  },

  mounted() {
    this.refreshMoneyButton()
  },

  watch: {
    params(val) {
      this.refreshMoneyButton()
    }
  },

  methods: {
    refreshMoneyButton() {
      scriptLoader.load().then(mb => {
        mb.render(this.$refs.button, this.params)
      })
    }
  }
}
</script>
