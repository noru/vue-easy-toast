/*
* ON-GOING COMPONENT!
* TODO:
*  1. option: position (left right top bottom center)
*  2. font-awesome? emoji?
* */
/* eslint-disable */
import * as EasyToastVue from './EasyToast.vue'

export default {
  install(Vue, options) {
    const CONSTRUCTOR = Vue.extend(EasyToastVue)
    const CACHE = {}
    function toast(msg, options = {}) {
      options.message = msg
      let toast = CACHE[options.id] || (CACHE[options.id] = new CONSTRUCTOR())
      toast.queue.push(options)
    }
    Vue.toast = Vue.prototype.$toast = toast
  }
}
