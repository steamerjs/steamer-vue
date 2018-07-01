import Vue from 'vue';
import Vuex from 'vuex';
// import {
//     request,
// } from 'COMMON/request';
import getters from './getters';
import routing from './modules/routing';

if (!window.Vue) {
    Vue.use(Vuex);
}

const debug = process.env.NODE_ENV !== 'production';

const axiosMiddelware = store => {
    // console.log(store);

    store.subscribe(mutation => {
        // console.log(mutation);
    });

    store.subscribe(action => {
        // console.log(action);
    });
};

export default new Vuex.Store({
    getters,
    modules: {
        routing,
    },
    strict: debug,
    plugins: [
        axiosMiddelware,
    ],
    // plugins: debug ? [createLogger()] : []
});
