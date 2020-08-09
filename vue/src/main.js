import Vue from 'vue'
import App from './components/app/App.vue'
import 'bootstrap';
import './assets/Main.scss';
import VueSocketIO from "vue-socket.io";

Vue.config.productionTip = false;

// socket
Vue.use(new VueSocketIO({
      debug: true,
      connection: 'http://localhost:3000',
      vuex: {
        App,
        actionPrefix: "SOCKET_",
        mutationPrefix: "SOCKET_"
      }
    })
);

new Vue({
  render: h => h(App),
}).$mount('#app');
