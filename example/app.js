Vue.use(window['vue-easy-toast'].default)
let btn = document.getElementById('button')
btn.addEventListener('click', () => {
  Vue.toast('Hello World!', { className: 'et-alert' })
})
