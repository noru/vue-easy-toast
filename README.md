# Vue-Easy-Toast
![Vue 1.x](https://img.shields.io/badge/vue-1.x-green.svg "Vue 1 Compatible")
![Vue 2.x](https://img.shields.io/badge/vue-2.x-green.svg "Vue 2 Compatible")

A toast plugin for vue/vue2.

[DEMO](https://noru.github.io/vue-easy-toast/example/index.html)

Issue/PR is welcomed, I'll response as soon as possible.

## Usage

#### install
`npm install vue-easy-toast --save`

#### Quickstart
```javascript
// before start
import Toast from 'vue-easy-toast'
Vue.use(Toast)

// in your code
Vue.toast('Can I have everybody's attention?')

// or
$vm.$toast('Let me give a toast to you all.')

// or with HTML Tags
$vm.$toast('Hi <strong>Jonh</strong>')
```

#### More

`toast` or `$toast` takes 2 parameter: `(message, [options])`

##### Options

Parameter | Type |Default| Description
--------- | ---- | ------|-----------
id | `string` | `easy-toast-default` | Unique identifier globally. Use this to create multiple toasts with different setups.
parent | `string`| `body` | Selector of the container (TODO, not ready yet, position is fixed to the window)
className | `string`, `array` | | Self-defined class names to pass through. There are 3 pre-defined classes: `et-info`, `et-warn`,`et-alert`, to toast with different background color
horizontalPosition | `string` | `right` | Position horizontal of toast. There are 3 pre-defined positions: `left`, `right` and `center`
verticalPosition | `string` | `top` | Position vertical of toast. There are 2 pre-defined positions: `top` and `bottom`
duration | `number` | 5000 | The duration one toast will last, in milliseconds
mode | `string` | `override` | `override` or `queue`. If `override`, the last toast will forcibly flush previous toasts, otherwise it is queued after others
transition | `string` | `fade` | Built-in transitions: `fade`, `slide-[up/down/left/right]`. See also [Transitions](http://v1.vuejs.org/guide/transitions.html)

##### Styling

Besides minimum styling, *vue-easy-toast* try not to be opinionated about the appearance. It is a simply a `div`(class="et-wrapper") wrapped a `span`(class="et-content"). Apply your css freely with them or with your own classes passed in as `className`.  

##### example
```javascript
Vue.toast('Hi, there!', {
  id: 'my-toast',
  parent: '#toast-container',
  className: ['my-toast', 'toast-warning'],
  horizontalPosition: 'right',
  verticalPosition: 'top',
  duration: 3000,
  mode: 'queue',
  transition: 'my-transition'
})
```

##### TODO
*  font-awesome? emoji?

## License
MIT
