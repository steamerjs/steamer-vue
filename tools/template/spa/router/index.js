import Vue from 'vue';
import Router from 'vue-router';
import staticRoutes from './staticRoutes';

import store from '../store/';
import {
    CHANGE_URL
} from '../store/mutation_types';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: staticRoutes
})

router.beforeEach((to, from, next) => {
    store.commit(CHANGE_URL, to.path);
    next();
});

export default router;
