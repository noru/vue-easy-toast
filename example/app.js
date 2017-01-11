Vue.use(window['vue-easy-toast'].default)

let btnTopLeft = document.getElementById('btnTopLeft')
btnTopLeft.addEventListener('click', () => {
  Vue.toast('Top Left', { className: ['et-alert', 'my-class'], horizontalPosition: 'left', duration: 3000 })
})

let btnTopRight = document.getElementById('btnTopRight')
btnTopRight.addEventListener('click', () => {
  Vue.toast('Top Right', { className: ['et-alert', 'my-class'], horizontalPosition: 'right' })
})

let btnTopCenter = document.getElementById('btnTopCenter')
btnTopCenter.addEventListener('click', () => {
  Vue.toast('Top Center', { className: ['et-alert', 'my-class'], horizontalPosition: 'center' })
})

let btnBottomLeft = document.getElementById('btnBottomLeft')
btnBottomLeft.addEventListener('click', () => {
  Vue.toast('Bottom Left', { className: ['et-alert', 'my-class'], horizontalPosition: 'left', verticalPosition: 'bottom' })
})

let btnBottomRight = document.getElementById('btnBottomRight')
btnBottomRight.addEventListener('click', () => {
  Vue.toast('Bottom Right', { className: ['et-alert', 'my-class'], horizontalPosition: 'right', verticalPosition: 'bottom' })
})

let btnBottomCenter = document.getElementById('btnBottomCenter')
btnBottomCenter.addEventListener('click', () => {
  Vue.toast('Bottom Center', { className: ['et-alert', 'my-class'], horizontalPosition: 'center', verticalPosition: 'bottom' })
})
