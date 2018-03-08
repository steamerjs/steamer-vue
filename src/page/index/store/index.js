import Vue from 'vue';
import Vuex from 'vuex';
import {
    request
} from 'COMMON/request';
import getters from './getters';

if (!window.Vue) {
  Vue.use(Vuex)
}

const debug = process.env.NODE_ENV !== 'production'

var axiosMiddelware = store => {
  // console.log(store);

  store.subscribe(mutation => {
    // console.log(mutation);
  })

  store.subscribe(action => {
    // console.log(action);
  })
}

export default new Vuex.Store({
  getters,
  modules: {},
  strict: debug,
  plugins: [
    axiosMiddelware
  ]
  // plugins: debug ? [createLogger()] : []
})
