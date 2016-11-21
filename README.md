# Vue-Easy-Toast
A toast plugin for vue.

This is a beta version! Not yet tested on Vue 2.0.

## Usage

#### Quickstart
```
// before start
import Toast from 'vue-easy-toast'
Vue.use(Toast)

// in your code
Vue.toast('Can I have everybody's attention?')

// or
$vm.$toast('Let me give a toast to you all.')
```

#### More

`toast` or `$toast` takes 2 parameter: `(message, [options])`

##### Options

Parameter | Type |Default| Description
--------- | ---- | ------|-----------
id | `string` | easy-toast-default | 
parent | `string`| body | Selector of the container
className | `string`, `array` | | Self-defined class names to pass through
duration | `number` | 5000 | The duration one toast will last, in milliseconds
mode | `string` | override | `override` or `queue`. If `override`, the last toast will forcibly flush previous toasts, otherwise it is queued after others
transition | `string` | fade | Same as vue [Transitions](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent)


## License
MIT
