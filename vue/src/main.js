import Vue from 'vue'

// socket io
// import VueSocketIO from "vue-socket.io";

// router
import VueRouter from 'vue-router';

// components
import App from '@/components/app/App.vue'

// css
import './assets/Main.scss';

// bootstrap
import 'bootstrap';
import Login from "@/components/login/Login";
import Home from "@/components/home/Home";

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

// create vue w/ router
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        }
    ],
    mode: 'history'
});


new Vue({
    el: '#app',
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');
