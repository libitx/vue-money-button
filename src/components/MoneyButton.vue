<template>
  <div class="v-money-button-outer" :style="size">
    <div ref="button" class="v-money-button-inner" />
    <Loader v-show="loading" />
  </div>
  
</template>

<script>
import config from 'config'
import scriptLoader from 'script-loader'
import Loader from 'components/loader'

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

  data() {
    return {
      loading: true,
      size: {
        width: '280px',
        height: '50px'
      }
    }
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
        outputs:          this.outputs.length ? this.outputs : undefined,
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
    window.addEventListener('message', this.handleMessage, false)
  },

  watch: {
    params: {
      deep: true,
      handler(val) {
        this.refreshMoneyButton()
      }
    }
  },

  methods: {
    refreshMoneyButton() {
      scriptLoader.load().then(mb => {
        mb.render(this.$refs.button, this.params)
      })
    },

    handleMessage(e) {
      if (e.origin === config.iframeOrigin) {
        if ( e.data.v1.topic === 'ready' ) {
          setTimeout(_ => { this.loading = false; }, 1000)
          if (this.$refs.button) {
            this.size = {
              width:  this.$refs.button.offsetWidth + 'px',
              height: this.$refs.button.offsetHeight + 'px'
            }
          }
        }
      }
    }
  },

  components: {
    Loader
  }
}
</script>


<style>
.v-money-button-outer {
  position: relative;
  display: inline-block;
}

.v-money-button-inner {
  z-index: 1;
}
</style>