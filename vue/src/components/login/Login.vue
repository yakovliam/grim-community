<template>
  <div>
    <div class="grid-container">
      <div class="row justify-content-center">
        <div class="col-md-4 box">

          <h1 class="title-text">Login</h1>
          <div class="subtitle-text">Don't have an account? Sign up <a href="/signup">here</a>!</div>

          <div class="divider">
            <hr class="rounded-divider">
          </div>

          <div class="login">
            <v-form ref="entryForm" @submit.prevent="login">
              <div class="form">

                <v-alert v-model="alertShown" border="right"
                         colored-border
                         type="error"
                         elevation="2"
                         dismissible>
                  {{ alertText }}
                </v-alert>

                <v-text-field class="text-field" :rules="rules.email" v-model="email" label="Email"></v-text-field>

                <v-text-field
                    class="text-field"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="rules.password"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    ref="passwordField"
                    counter
                    @click:append="show1 = !show1"
                ></v-text-field>
              </div>

              <br/>

              <v-btn
                  color="primary"
                  class="ma-2 white--text"
                  type="submit"
              >
                Login
                <v-icon right dark>mdi-login</v-icon>
              </v-btn>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import Vue from 'vue';

let alertText = undefined;
let alertShown = false;

export default {
  name: 'Login',
  data: () => ({
    alertText: alertText,
    alertShown: alertShown,
    show1: false,
    rules: {
      email: [
        value => !!value || 'Required.', // required test
        value => { // email test
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid Email.'
        },
        value => (value || '').length >= 5 || 'Min 5 characters', // minimum test
      ],
      password: [
        value => !!value || 'Required.', // required test
        value => (value || '').length >= 8 || 'Min 8 characters', // minimum test
        value => (value || '').length < 2048 || 'Max 2048 characters', // maximum test
      ],
    },
    password: undefined,
    email: undefined
  }),
  methods: {
    login() {

      // if the form is NOT validated (something is wrong)
      if (!this.$refs.entryForm.validate()) {
        // alert with message (not using alert())
        this.alertText = "Hmm... you missed something!";
        this.alertShown = true;

        // return
        return;
      }

      // compile data into a request
      const data = {
        email: this.email,
        password: this.password
      }

      // construct axios request
      Vue.axios.post('http://localhost:3000/user/login', data).then(success => {
        // get returned user object, and put it into local storage
        localStorage.setItem("user", success.data.user);
        // refresh page (will automatically redirect if success!)
        router.go(0);
      }).catch(error => {
        this.alertText = ((error && error.response) ? error.response.data.message : "Oops! Something went wrong.");
        this.alertShown = true;
      });
    },
  },
  mounted() {
    // if user DOES exists in localStorage
    if (localStorage.getItem("user")) {
      // redirect to profile
      router.push('/profile').catch(() => {
      });
    }
  }
}
</script>

<style lang="scss" scoped>

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

.subtitle-text {
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

@media (max-width: 1000px) {
  .form {
    width: 100%;
  }
  .text-field {
    width: 100%;
  }
}

// disable outline on focus
textarea:focus, input:focus, .v-btn:focus, button:focus {
  // outline (on focus)
  outline: none;
}

</style>