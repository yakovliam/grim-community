<template>
  <div>
    - Profile Page
  </div>
</template>

<script>
import App from "@/components/app/App";
import VueSocketIO from "vue-socket.io";
import Vue from "vue";

export default {
  name: 'Profile',
  mounted() {
    // connect to chat room socket
    /* This automatically handles disconnecting as soon as the page is changed! */
    Vue.use(new VueSocketIO({
          debug: true, //todo
          connection: 'http://localhost:3000',
          vuex: {
            App,
            actionPrefix: "SOCKET_",
            mutationPrefix: "SOCKET_"
          }
        })
    );
  }
}
</script>

<style lang="scss">
</style>