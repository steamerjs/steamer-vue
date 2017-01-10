import Vue from 'vue'

import Page from '../../components/index/index.vue'

import Promise from 'promise-polyfill'

if(!window.Promise) {
	window.Promise = Promise;
}



/* eslint-disable no-new */
new Vue({
	el: '#page',
	store,
	render: h => h(Page)
})
