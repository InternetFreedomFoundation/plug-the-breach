// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueFeather from 'vue-feather';
import DefaultLayout from './layouts/Default.vue';

require('./main.css'); // Import Tailwind CSS

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);
  if (typeof document !== 'undefined') {
    Vue.component('Icon', VueFeather);
  }
}
