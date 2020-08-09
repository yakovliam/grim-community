<template>

  <div id="app">
    <!---------------------->

    <div class="banner">Chat Room</div>

    <div class="container component-container">
      <!---------------------->

      <div class="row chat-row">
        <!---------------------->

        <div class="col chat-column float-1">
          <div id="messages-container" class="chat-container">
            <div id="style-1" class="scrollbar"></div>
          </div>
        </div>

        <div class="col-3 side-column float-2">
          <div class="inner-right-side-container">
            <div><b>{{ totalCount }}</b> User(s) online</div>
            <br/>
            <div>Logged in as: <b>{{ username }}</b></div>
          </div>
        </div>

        <!---------------------->
      </div>

      <div class="row text-input-row">
        <!---------------------->

        <div class="col text-input-column float-3">

          <div class="input-container">
            <span class="input">
              <label for="message"></label><input @keyup.enter="sendMessage" ref="textInput" type="text" id="message"
                                                  placeholder="Enter your message here">
            </span>
          </div>

        </div>

        <div class="col-2 send-column float-4">

          <div class="send-button-container">
            <button v-on:click="sendMessage" class="send-button">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
              <span class="button-text">Send</span>
            </button>
          </div>
        </div>

        <!---------------------->
      </div>

      <!---------------------->
    </div>

    <!---------------------->
  </div>

</template>

<script>
const username = "Username" + Math.floor(Math.random() * (21));
let totalCount = 0;

export default {
  name: 'App',
  methods: {
    sendMessage: function () {
      this.$socket.emit('message', {"message": this.$refs.textInput.value})

      // clear text area
      this.$refs.textInput.value = "";
    },
  },
  data: function () {
    return {
      username: username,
      totalCount: totalCount
    }
  },
  sockets: {
    connections(data) {
      this.totalCount = data.totalCount;
    },
    messages(data) {
      // username
      const username = data.username;
      // message
      const message = data.message;

      // create new message
      let divMessage = document.createElement('div');
      divMessage.innerHTML = "<b>" + username + "</b>: " + message;
      divMessage.className = "chat-message";

      document.getElementById("messages-container").appendChild(divMessage);
    },
    leave(data) {
      this.totalCount = data.totalCount;
    }
  },
  created() {
    this.$socket.emit('join', {"username": username});
  }
}
</script>

<style lang="scss">
@import "./App";
</style>