/*
Imports
 */

/* VUE */
import Vue from 'vue'
// router
import VueRouter from 'vue-router';
import router from './router';
// components & css & frameworks
import App from '@/components/app/App.vue'
import './assets/Main.scss';
import 'bootstrap';
import vuetify from './plugins/vuetify';
// http requests
import axios from 'axios';
import VueAxios from 'vue-axios';

// production tip
Vue.config.productionTip = false;

// use router & axios for post/get http requests
Vue.use(VueAxios, axios)
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');


/*
 * Extra information:
 * - Storing global variables (like user) using localStorage.getItem("key name here");
 */