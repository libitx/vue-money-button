<template>
  <div class="button-wrap" :style="size">
    <Popover
      v-if="error"
      :title="error.title"
      :text="error.text"
      :buttons="error.buttons"
      @close="error = null"
    />
    <iframe :src="url" class="button-frame" :style="size" scrolling="no" v-message-handler />
    <Spinner />
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
    to:               { type: String, required: true },
    amount:           { required: true },
    currency:         { type: String, default: 'USD' },
    label:            { type: String, required: true },
    hideAmount:       { type: Boolean, default: false },
    opReturn:         { type: String },
    dataOutputs:      { type: String, default: '[]' },
    clientIdentifier: { type: String },
    buttonId:         { type: String },
    buttonDate:       { type: String },
    type:             { type: String, default: 'buy' },
  },

  data() {
    return {
      error: null,
      size: {
        width: '280px',
        height: '50px'
      }
      
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
        ccy:  this.currency,
        lbl:  this.label,
        hamt: this.hideAmount,
        opd:  this.opReturn,
        os:   this.outputs,
        cid:  this.clientIdentifier,
        bid:  this.buttonId,
        bdt:  this.buttonData,
        t:    this.type
      }
    },
  },

  methods: {
    handleError(error) {
      switch(error) {
        case 'insufficient balance':
          return this.error = {
            title: 'Low balance',
            text: 'You do not have enough money.',
            buttons: [
              { url: this.$options.domain.concat('/wallet'), text: 'Add Money', class: 'red' }
            ]
          };
        case 'not logged in':
          return this.error = {
            title: 'Login',
            text: 'Please login.',
            buttons: [
              { url: this.$options.domain.concat('/login'), text: 'Log in', class: 'red' },
              { url: this.$options.domain.concat('/register'), text: 'Register', class: 'nofill' }
            ]
          };
        default:
          return this.error = {
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