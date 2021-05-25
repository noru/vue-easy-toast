/**
 * Augment the typings of Vue.js
 */
import Vue = require('vue');

import * as Toast from './toast';

export const install: Vue.PluginFunction<{}>

declare module 'vue/types/vue' {
  interface Vue {
    $toast: (message: string, options?: Toast.ToastOptions) => any;
  }
}
