# vue-money-button

> An unofficial Vue.js component for the MoneyButton.

The official [MoneyButton](https://www.moneybutton.com/) `moneybutton.js` script is only suitable for basic usage on static web pages. This library allows the MoneyButton to be used in Vue.js projects and benefit from reactive properties.

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
      amount="1"
      currency="USD"
      label="$1 Tip me"
      type="tip"

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

| Prop         | Type                      | Required           | Default |
|--------------|---------------------------|--------------------|---------|
| `to`         | `String`                  | :white_check_mark: | `null`  |
| `amount`     | `String` or `Number`      | :white_check_mark: | `null`  |
| `currency`   | `String`                  |                    | `USD`   |
| `label`      | `String`                  | :white_check_mark: | `null`  |
| `hideAmount` | `Boolean`                 |                    | `false` |
| `opReturn`   | `String`                  |                    | `null`  |
| `outputs`    | `String` (Stringified JSON) |                  | `[]`    |
| `clientIdentifier` | `String`            |                    | `null`  |
| `buttonId`   | `String`                  |                    | `null`  |
| `buttonData` | `String`                  |                    | `null`  |
| `type`       | `String` - `buy` or `tip` |                    | `buy`   |

## Events

The component emits the following events:

| Event     |                                   |
|-----------|-----------------------------------|
| `payment` | Triggered on a successful payment |
| `error`   | Triggered on a payment error      |

## License

vue-money-button is open source and released under the [MIT License](license.md).

Copyright (c) 2018 libitx.
