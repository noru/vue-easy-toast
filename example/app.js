

Vue.use(window['vue-easy-toast'].default)
var app = new Vue({
  data: function() {
    return {
      duration: 3000,
      mode: 'override',
      closeable: false,
      horizontalPosition: 'left',
      verticalPosition: 'top',
      defaultTransition: 'fade',
      defaultClass: '',
      customClass: '.et-wrapper.my-class { \n\
        background-color: red;\n}',
      message: 'How are <strong>you</strong> <i>doing</i>?',
    }
  },
  watch: {
    'customClass': function(val) {
      document.querySelector('#cust-style').textContent = val
    }
  },
  methods: {
    toast: function() {
      this.$toast(this.message, {
        duration: this.duration,
        mode: this.mode,
        closeable: this.closeable,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        transition: this.defaultTransition,
        className: [ this.defaultClass, 'my-class'],
      })
    }
  }
})

app.$mount('#app')
