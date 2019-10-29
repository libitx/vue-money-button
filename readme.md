# vue-money-button

> An unofficial Vue.js component for the Money Button.

A Vue.js component that lets you integrate [Money Button](https://www.moneybutton.com/)'s payment system into your app or web page. Developed independently, but closely mirrors the conventions established in the offical [React component](https://github.com/moneybutton/react-money-button).

## Demo

https://libitx.github.io/vue-money-button/

## Installation

```sh
npm install vue-money-button --save
# or
yarn add vue-money-button
```

## Usage

```Vue
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
import MoneyButton from 'vue-money-button'

export default {
  components: {
    MoneyButton
  },

  methods: {
    handlePayment(payment) {
      // handle payment
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
| `editable`    | `Boolean`                 | `false` |
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
| `devMode`     | `Boolean`                 | `false` |
| `disabled`    | `Boolean`                 | `false` |

An array of `outputs` can be set **instead of the `to`, `amount` and `currency` properties**. Each output output object has the following parameters:

| Name         | Type                      | Required           |
|--------------|---------------------------|--------------------|
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

Copyright (c) 2018 libitx.
