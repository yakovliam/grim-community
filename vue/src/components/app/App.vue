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
            <div class="chat-message">
              <b>Jacob</b>: Hello!
            </div>
          </div>
        </div>

        <div class="col-3 side-column float-2">
          <div class="inner-right-side-container">
            <div><b>1</b> User(s) online</div>
            <br/>
            <div>Logged in as: <b>Username</b></div>
          </div>
        </div>

        <!---------------------->
      </div>

      <div class="row text-input-row">
        <!---------------------->

        <div class="col text-input-column float-3">

          <div class="input-container">
            <span class="input">
              <label for="message"></label><input ref="textInput" type="text" id="message"
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
export default {
  name: 'App',
  methods: {
    sendMessage: function () {
      // let message = this.$refs.textInput;

      // create new message
      // let divMessage = document.createElement('div');
      // divMessage.innerHTML = "<b>Jacob</b>: " + Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
      // divMessage.className = "chat-message";
      //
      // document.getElementById("messages-container").appendChild(divMessage);
    }
  }
}
</script>

<style lang="scss">
@import "./App";
</style>