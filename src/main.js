// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';
import VueFeather from 'vue-feather';
import DefaultLayout from './layouts/Default.vue';

require('./main.css'); // Import Tailwind CSS

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);
  Vue.use(FloatingVue, {
    themes: {
      'default-dropdown': {
        $extend: 'dropdown',
        distance: '24',
      },
      'default-tooltip': {
        $extend: 'tooltip',
        placement: 'bottom',
        triggers: ['click', 'hover', 'focus', 'touch'],
        autoHide: true,
        distance: '6',
      },
    },
  });
  if (typeof document !== 'undefined') {
    Vue.component('Icon', VueFeather);
  }
}
