<template>
  <div class="button-wrap" :style="size">
    <Popover
      v-if="hint"
      :title="hint.title"
      :text="hint.text"
      :buttons="hint.buttons"
      @close="hint = null"
    />
    <iframe :src="url" class="button-frame" :style="size" scrolling="no" v-message-handler @load="loaded" />
    <Spinner v-show="loading" />
  </div>
</template>

<script>
import qs from 'qs'
import Popover from 'components/Popover.vue'
import Spinner from 'components/Spinner.vue'
import messageHandler from 'directives/message-handler'

export default {
  domain: 'https://www.moneybutton.com',

  props: {
    to:               [String, Number],
    amount:           [String, Number],
    currency:         { type: String, default: 'USD' },
    label:            { type: String, required: true },
    hideAmount:       { type: Boolean, default: undefined },
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

  watch: {
    url(val) {
      this.loading = true;
    }
  },

  computed: {
    url() {
      return this.$options.domain.concat('/iframe/v2?', qs.stringify(this.queryParams));
    },

    queryParams() {
      return {
        to:   this.to,
        amt:  this.amount,
        ccy:  this.outputs.length ? undefined : this.currency,
        lbl:  this.label,
        hamt: this.hideAmount,
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

    handleError(error) {
      switch(error) {
        case 'insufficient balance':
          return this.hint = {
            title: 'Low balance',
            text: 'Your balance is too low to make this payment.',
            buttons: [
              { url: this.$options.domain.concat('/wallet'), text: 'Add Money', class: 'red' }
            ]
          };
        case 'not logged in':
          return this.hint = {
            title: 'Money Button',
            text: 'We believe in sound digital money for everyone in the world. Join Money Button to make this payment.',
            buttons: [
              { url: this.$options.domain.concat('/login'), text: 'Log in', class: 'red' },
              { url: this.$options.domain.concat('/register'), text: 'Register', class: 'nofill' }
            ]
          };
        default:
          return this.hint = {
            title: 'Unknown Error',
            text: error
          };
      }
    },

    resize({ width, height }) {
      this.size.width = width;
      this.size.height = height;
    }
  },

  components: {
    Popover,
    Spinner
  },

  directives: {
    messageHandler
  }

}
</script>

<style scoped>
.button-wrap {
  position: relative;
  display: inline-block;
}

.button-frame {
  position: relative;
  z-index: 1;
  border: none;
}
</style>