# vue-money-button

> An unofficial Vue.js component for the Money Button.

The official [Money Button](https://www.moneybutton.com/) `moneybutton.js` script is only suitable for basic usage on static web pages. This library allows Money Button to be used in Vue.js projects and benefit from reactive properties.

## Demo

https://libitx.github.io/vue-money-button/

## Installation

```console
npm install vue-money-button --save
```

## Usage

```Vue
<template>
  <div>
    <MoneyButton
      to="74"
      amount="0.5"
      currency="USD"
      label="Send Libby some loot"
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

| Prop         | Type                      | Default |
|--------------|---------------------------|---------|
| `to`         | `String`                  | `null`  |
| `amount`     | `String` or `Number`      | `null`  |
| `currency`   | `String`                  | `'USD'` |
| `label`      | `String`                  | `null`  |
| `hideAmount` | `Boolean`                 | `false` |
| `opReturn`   | `String`                  | `null`  |
| `outputs`    | `Array`                   | `[]`    |
| `clientIdentifier` | `String`            | `null`  |
| `buttonId`   | `String` or `Number`      | `null`  |
| `buttonData` | `String` or `Number`      | `null`  |
| `type`       | `String` - `buy` or `tip` | `'buy'` |

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
| `payment` | Triggered on a successful payment |
| `error`   | Triggered on a payment error      |

## License

vue-money-button is open source and released under the [MIT License](license.md).

Copyright (c) 2018 libitx.
