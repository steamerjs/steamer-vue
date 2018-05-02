import 'COMMON/polyfill.js';
import Vue from 'vue';
import App from './main.vue';
import store from './store';

new Vue({
    el: '#page',
    store,
    render: h => h(App)
});
