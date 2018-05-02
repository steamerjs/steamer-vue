import 'COMMON/polyfill.js';
import Vue from 'vue';
import App from './main.vue';
import router from './router';
import store from './store';

const app = new Vue({
    // el: '#page',
    router,
    store,
    // ...App
    render: h => h(App)
});

app.$mount('#page');
