/*
* ON-GOING COMPONENT!
* TODO:
*  1. option: position (left right top bottom center)
*  2. font-awesome? emoji?
* */
/* eslint-disable */
import * as EasyToast from './EasyToast'

const CONSTRUCTOR = Vue.extend(EasyToast)
const CACHE = {}
function toast(msg, option = {}) {
  option.message = msg
  let toast = CACHE[option.id] || (CACHE[option.id] = new CONSTRUCTOR())
  toast.queue.push(option)
}

export default {
  install(Vue, options) {
    Vue.toast = Vue.prototype.$toast = toast
  }
}
