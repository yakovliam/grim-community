import Vue from 'vue'

// socket io
// import VueSocketIO from "vue-socket.io";

// router
import VueRouter from 'vue-router';
import router from './router';
// components
import App from '@/components/app/App.vue'
// css
import './assets/Main.scss';
// bootstrap
import 'bootstrap';
// vuetify
import vuetify from './plugins/vuetify';

// production tip
Vue.config.productionTip = false;

// use router
Vue.use(VueRouter);

// socket
// Vue.use(new VueSocketIO({
//         debug: true,
//         connection: 'http://localhost:3000',
//         vuex: {
//             App,
//             actionPrefix: "SOCKET_",
//             mutationPrefix: "SOCKET_"
//         }
//     })
// );

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