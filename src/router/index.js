import Vue from 'vue';
import VueRouter from 'vue-router';
import PageRouter from './view/index';
Vue.use(VueRouter);

let Router = new VueRouter({
    routes: []
})

Router.addRoutes([...PageRouter]);
export default Router;