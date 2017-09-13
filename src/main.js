import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import * as VueGoogleMaps from 'vue2-google-maps'

import 'onsenui';
// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDX3SEHwFUY-k_Jp7YMp0-uTvo7up-paXM'
  }
});

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  template: '<app></app>',
render: h => h(App),
  components:{App}
});



