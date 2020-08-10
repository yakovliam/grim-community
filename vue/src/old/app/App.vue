<template>

  <div id="app">
    <!---------------------->

    <div class="banner">Chat Room</div>

    <div class="container component-container">
      <!---------------------->

      <div class="row chat-row">
        <!---------------------->

        <div class="col chat-column float-1" id="chat-column">
          <div id="messages-container" class="chat-container">
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
              &#187;&#187;&#187;
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
      const message = this.$refs.textInput.value;

      // if message empty, don't send!
      if (message === undefined || message === "") {
        return;
      }

      this.$socket.emit('message', {"message": message})

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

      let isSelf = username === this.username;

      // create wrapper
      let wrapper = document.createElement("div");

      // check if the message is being sent by us or someone else
      if (isSelf) {
        // self
        wrapper.className = "chat-message-self-wrap";
      } else {
        // other
        wrapper.className = "chat-message-other-wrap";
      }

      // create new message
      let divMessage = document.createElement('div');
      divMessage.innerHTML = "<b>" + username + "</b>: " + message;

      // check if the message is being sent by us or someone else
      if (isSelf) {
        // self
        divMessage.className = "chat-message-self";
      } else {
        // other
        divMessage.className = "chat-message-other";
      }

      // add message to wrapper
      wrapper.appendChild(divMessage);

      // create break
      let brk = document.createElement("br");

      // get container
      const container = document.getElementById("messages-container");

      // append wrapper (which has message)!
      container.appendChild(wrapper);
      container.appendChild(brk);

      // automatically scroll to bottom of chat column
      document.getElementById("chat-column").scrollTop = document.getElementById("chat-column").scrollHeight;
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
@import "App";
</style>