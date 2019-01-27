<template>
  <div class="wrap__moneybutton" :style="size">
    <Popup
      v-if="popup"
      :title="popup.title"
      :message="popup.message"
      :button-text="popup.buttonText"
      :button-url="popup.buttonUrl"
      :button2-text="popup.buttonText2"
      :button2-url="popup.buttonUrl2"
      @close="popup = null"
    />
    <iframe
      class="frame__moneybutton"
      scrolling="no"
      ref="iframe"
      :style="size"
      :src="iframeSrc"
      @load="loaded"
    />
    <LoaderIcon v-show="loading" />
  </div>
</template>

<script>
import config from 'config'
import Popup from 'components/Popup.vue'
import LoaderIcon from 'components/Loader.vue'

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
      popup: null,
      loading: true,
      size: {
        width: '280px',
        height: '50px'
      },
      iframeSrc: config.iframeUrl.concat('?', 'format=postmessage')
    }
  },

  mounted() {
    window.addEventListener('message', this.handleMessage, false)
  },

  destroyed() {
    window.removeEventListener('message', this.handleMessage, false)
  },

  computed: {
    queryParams() {
      return {
        to:     this.to,
        amt:    this.amount,
        edt:    this.editable,
        ccy:    this.outputs.length ? undefined : this.currency,
        lbl:    this.label,
        scsmsg: this.successMessage,
        opd:    this.opReturn,
        os:     this.outputs.length ? JSON.stringify(this.outputs) : undefined,
        cid:    this.clientIdentifier,
        bid:    this.buttonId,
        bdt:    this.buttonData,
        t:      this.type,
        dev:    this.devMode,
        dsbd:   this.disabled
      }
    },
  },

  watch: {
    queryParams(params) {
      this.postMessage('attributes-updated', params)
    }
  },

  methods: {
    loaded(e) {
      this.postMessage('attributes-updated', this.queryParams)
      setTimeout(() => { this.loading = false }, 2000)
    },

    postMessage(topic, payload) {
      this.$refs.iframe.contentWindow.postMessage({
        v1: { topic, payload }
      }, config.iframeUrl)
    },

    handleMessage(e) {
      if ( this.$refs['iframe'] && e.source === this.$refs['iframe'].contentWindow ) {
        const { error, size, payment, popup } = e.data;

        // Check valid iframe origin
        if ( e.origin !== config.iframeOrigin) {
          console.log(`vue-money-button: postMessage: wrong origin: ${e.origin} should be ${config.iframeOrigin}`)
          return
        }

        if (process.env.NODE_ENV === 'development')
          console.log('vue-money-button: Received message', e.data)

        // If popup
        if ( popup ) {
          this.popup = popup;

        // If error
        } else if ( error ) {
          this.$emit('error', new Error(error))

        // If resize
        } else if ( size ) {
          this.size = size;

        // If payment
        } else if ( payment ) {
          this.$emit('payment', payment)
        }
      }
    }
  },

  components: {
    Popup,
    LoaderIcon
  }
}
</script>

<style>
.wrap__moneybutton {
  position: relative;
  display: inline-block;
}

.frame__moneybutton {
  position: relative;
  z-index: 1;
  border: none;
}
</style>