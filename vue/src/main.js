import Vue from 'vue'
import App from './components/app/App.vue'
import firebase from "firebase";
import 'bootstrap';
import './assets/Main.scss';

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP3gmT9UOFlawvlbMdGrBmEGGzWE8OPE0",
  authDomain: "vue-chatroom-6f441.firebaseapp.com",
  databaseURL: "https://vue-chatroom-6f441.firebaseio.com",
  projectId: "vue-chatroom-6f441",
  storageBucket: "vue-chatroom-6f441.appspot.com",
  messagingSenderId: "875809954611",
  appId: "1:875809954611:web:f6877df3a41299aeac3c46"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// set db to window variable
var db = firebase.firestore();

// set window variable
window.db = db;

// disabled deprecated features
db.settings({
  timestampsInSnapshots: false
});


new Vue({
  render: h => h(App),
}).$mount('#app')
