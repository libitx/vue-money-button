<template>
  <div class="wrap__moneybutton" :style="size">
    <Popover
      v-if="hint"
      :title="hint.title"
      :text="hint.text"
      :buttons="hint.buttons"
      @close="hint = null"
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
import qs from 'qs'
import config from 'config'
import Popover from 'components/Popover.vue'
import LoaderIcon from 'components/Loader.vue'

export default {
  props: {
    to:               [String, Number],
    amount:           [String, Number],
    currency:         { type: String, default: 'USD' },
    label:            { type: String, required: true },
    opReturn:         String,
    outputs:          { type: Array, default: () => [] },
    clientIdentifier: String,
    buttonId:         true,
    buttonData:       true,
    type:             { type: String, default: 'buy' },
    devMode:          { type: Boolean, default: undefined }
  },

  data() {
    return {
      hint: null,
      loading: true,
      size: {
        width: '280px',
        height: '50px'
      }
    }
  },

  mounted() {
    window.addEventListener('message', this.handleMessage, false);
  },

  destroyed() {
    window.removeEventListener('message', this.handleMessage, false);
  },

  watch: {
    iframeSrc(val) {
      this.loading = true;
    }
  },

  computed: {
    iframeSrc() {
      return config.iframeUrl.concat('?', qs.stringify(this.queryParams));
    },

    queryParams() {
      return {
        to:   this.to,
        amt:  this.amount,
        ccy:  this.outputs.length ? undefined : this.currency,
        lbl:  this.label,
        opd:  this.opReturn,
        os:   this.outputs.length ? JSON.stringify(this.outputs) : undefined,
        cid:  this.clientIdentifier,
        bid:  this.buttonId,
        bdt:  this.buttonData,
        t:    this.type,
        dev:  this.devMode
      }
    },
  },

  methods: {
    loaded(e) {
      setTimeout(() => { this.loading = false }, 2000)
    },

    handleMessage(e) {
      if ( this.$refs['iframe'] && e.source === this.$refs['iframe'].contentWindow ) {
        const { error, size, payment, message } = e.data;

        // Check valid iframe origin
        if ( e.origin !== config.iframeOrigin) {
          console.log(`vue-money-button: postMessage: wrong origin: ${e.origin} should be ${config.iframeOrigin}`);
          return
        }

        if (process.env.NODE_ENV === 'development')
          console.log('vue-money-button: Received message', e.data);

        // If error
        if ( error ) {
          this.hint = config.getHintForError(error, message)
          this.$emit('error', error)

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
    Popover,
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