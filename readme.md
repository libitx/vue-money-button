# vue-money-button

> An unofficial Vue.js component for the Money Button.

A Vue.js component that lets you integrate [Money Button](https://www.moneybutton.com/)'s
payment system into your app or web page. Developed independently, but closely
mirrors the conventions established in the offical [React component](https://github.com/moneybutton/react-money-button).

## Demo

https://libitx.github.io/vue-money-button/

## Upgrading from a previous version?

Since version `1.0.0` the default export of the module has changed. Previously
the default export was the Money Button component itself, for use in your own
components. Now, the default export is a Vue plugin that when used installs
adds the component globally AND attaches `this.$getMoneyButton()` to all your
Vue instances, providing access to the `moneyButton` object and the Invisible
Money Button API.

Anyone upgrading from a version prior to `1.0.0` should re-read the installation
instructions below.

## Installation

Install with npm or yarn:

```sh
yarn add vue-money-button
```

Install the plugin in your Vue app's entrypoint:

```javascript
import Vue from 'vue'
import VueMoneyButton from 'vue-money-button'

Vue.use(VueMoneyButton)
```

The above step is recommended but optional. It adds the component to Vue globally,
and also attaches `this.$getMoneyButton()` to all your Vue instances.
Alternatively you can skip the above step, and add Money Button to your
components where required (although you don't get access to IMB this way).

```vue
<script>
import { MoneyButton } from 'vue-money-button'

export default {
  components: {
    MoneyButton
  }
}
</script>
```

## Usage

Using the Money Button component:

```vue
<template>
  <div>
    <MoneyButton
      to="YOUR BITCOIN ADDRESS"
      amount="0.5"
      currency="USD"
      label="Send some loot"
      @payment="handlePayment"
    />
  </div>
</template>

<script>
export default {
  methods: {
    handlePayment(payment) {
      // handle payment
    }
  }
}
</script>
```

Using Invisible Money Button:

```vue
<template>
  <div>
    <a @click="likePost">Like!</a>
  </div>
</template>

<script>
export default {
  methods: {
    async likePost() {
      const { IMB } = await this.$getMoneyButton()
      const button = IMB(imgConfig)

      button.swipe(likeParams)
    }
  }
}
</script>
```

## Properties

The following properties can be set on the component:

| Prop          | Type                      | Default |
|---------------|---------------------------|---------|
| `to`          | `String`                  | `null`  |
| `amount`      | `String` or `Number`      | `null`  |
| `currency`    | `String`                  | `'USD'` |
| `label`       | `String`                  | `null`  |
| `successMessage` | `String`               | `null`  |
| `opReturn`    | `String`                  | `null`  |
| `outputs`     | `Array`                   | `[]`    |
| `cryptoOperations` | `Array`              | `null`  |
| `clientIdentifier` | `String`             | `null`  |
| `buttonId`    | `String` or `Number`      | `null`  |
| `buttonData`  | `String` or `Number`      | `null`  |
| `type`        | `String` - `buy` or `tip` | `'buy'` |
| `editable`    | `Boolean`                 | `false` |
| `disabled`    | `Boolean`                 | `false` |
| `devMode`     | `Boolean`                 | `false` |
| `preserveOrder` | `Boolean`               | `false` |

An array of `outputs` can be set **instead of the `to`, `amount` and `currency` properties**.
Each output object has the following parameters:

| Name         | Type                      | Required           |
|--------------|---------------------------|--------------------|
| `to`         | `String`                  |                    |
| `address`    | `String`                  |                    |
| `userId`     | `String` or `Number`      |                    |
| `script`     | `String`                  |                    |
| `amount`     | `String`                  | :heavy_check_mark: |
| `currency`   | `String`                  | :heavy_check_mark: |


## Events

The component emits the following events:

| Event     |                                   |
|-----------|-----------------------------------|
| `load`    | Triggered on load                 |
| `payment` | Triggered on a successful payment |
| `error`   | Triggered on a payment error      |
| `cryptoOperations` | Callback returning the cryptoOperations object |

## License

vue-money-button is open source and released under the [MIT License](license.md).

Copyright (c) 2018-2021 libitx.
