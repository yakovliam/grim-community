<template>
  <div>
    <div class="grid-container">
      <div class="row justify-content-center">
        <div class="col-md-4 box">

          <h1 class="title-text">Login</h1>
          <div class="subtitle">Don't have an account? Sign up <a href="/signup">here</a>!</div>

          <div class="divider">
            <hr class="rounded-divider">
          </div>

          <div class="login">

            <div class="form">
              <v-text-field :rules="rules.email" label="Email"></v-text-field>

              <v-text-field
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="rules.password"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  counter
                  @click:append="show1 = !show1"
              ></v-text-field>
            </div>

            <br/>

            <v-btn
                :loading="loading3"
                :disabled="loading3"
                color="primary"
                class="ma-2 white--text"
                @click="loader = 'loading3'"
            >
              Login
              <v-icon right dark>mdi-login</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    show1: false,
    password: "Password",
    rules: {
      email: [
        value => !!value || 'Required.', // required test
        value => (value || '').length <= 20 || 'Max 20 characters', // maximum test
        value => { // email test
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid Email.'
        },
      ],
      password: [
        value => !!value || 'Required.', // required test
        value => (value || '').length >= 8 || 'Min 8 characters', // maximum test
      ],
    }
  }),
  created() {
    //todo uncomment
    // // if user DOES exists in localStorage
    // if (localStorage.getItem("user") !== null) {
    //   // redirect to profile
    //   this.$router.push("/profile");
    // }
  }
}
</script>

<style lang="scss">

.grid-container {

  // positioning, height
  height: 100%;

  // padding
  padding: 3rem;

  // alignment of children
  text-align: center;
}

.box {
  // border
  border-style: none;
  border-radius: 20px;

  //TODO change
  // positioning, height
  //height: auto;
  //height: 27rem;

  padding: 40px;

  // drop shadow
  -webkit-box-shadow: 0px 0px 30px 0px rgba(50, 50, 50, 0.11);
  -moz-box-shadow: 0px 0px 30px 0px rgba(50, 50, 50, 0.11);
  box-shadow: 0px 0px 30px 0px rgba(50, 50, 50, 0.11);
}

.title-text {
  // positioning / design
  text-align: center;
  // padding
  padding-top: 30px;

  // font
  font-size: 40px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;

  // color
  color: #734B5E;
}

.subtitle {
  // positioning / design
  padding-top: 10px;
  text-align: center;

  // font
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;

  // color
  color: #BCBDC0;
}

hr.rounded-divider {
  border-top: 2px solid #bbb;
  width: 95%;
  opacity: 20%;
  border-radius: 8px;
}

.divider {
  // padding
  padding-top: 10px;
}

.login {
  // padding
  padding-top: 30px;
  padding-bottom: 30px;
}

.form {
  // how it should be displayed
  display: inline-block;

  // width
  width: 50%;

  // padding
  padding-bottom: 30px;
}

.go-button {
  font-family: "Roboto", sans-serif;

  // border
  border-radius: 10px;
  border-width: 0;

  // width
  width: 240px;
  height: 40px;

  // color
  color: white;
  background-color: #1eb8ff;

  transition: 1s ease;

  &:hover {
    border-radius: 30px;
    background-color: #1587bc;
    animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both;
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
}

// disable outline on focus
textarea:focus, input:focus, .v-btn:focus, button:focus {
  // outline (on focus)
  outline: none;
}

</style>