# Vue-Easy-Toast
A toast plugin for vue/vue2.

This is a beta version! 

## Usage

#### install
`npm install vue-easy-toast --save`

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
id | `string` | `easy-toast-default` | Unique identifier globally. Use this to create multiple toasts with different setups.
parent | `string`| `body` | Selector of the container
className | `string`, `array` | | Self-defined class names to pass through. There are 3 pre-defined classes: `et-info`, `et-warn`,`et-alert`, to toast with different backgroud color
duration | `number` | 5000 | The duration one toast will last, in milliseconds
mode | `string` | `override` | `override` or `queue`. If `override`, the last toast will forcibly flush previous toasts, otherwise it is queued after others
transition | `string` | `fade` | Same as vue [Transitions](http://v1.vuejs.org/guide/transitions.html)

##### example
```
Vue.toast('Hi, there!', {
  id: 'my-toast',
  parent: '#toast-container',
  className: ['my-toast', 'toast-warning'],
  duration: 3000,
  mode: 'queue',
  transition: 'my-transition'
})
```

## License
MIT
