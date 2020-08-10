<template>
  <div class="grid-container">
    <div class="row justify-content-center">
      <div class="col-md-4 box">
        <div class="title">Login</div>
        <div class="subtitle">Don't have an account? Sign up <a href="/signup">here</a>!</div>

        <div class="divider">
          <hr class="rounded-divider">
        </div>

        <div class="login">

          <div class="form">
            <input class="input" placeholder="Email"/>
          </div>

          <br/><br/>

          <div class="form">
            <input class="input" placeholder="Password"/>
          </div>

          <br/><br/>

          <button class="go-button">Go</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {}
  },
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

.title {
  // positioning / design
  text-align: center;

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
  padding-top: 10px;
}

.login {
  padding-top: 30px;
}

.form {

}

.input {
  text-align: center;
  border-style: none;
  border-bottom: 2px solid #BCBDC0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
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
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
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
textarea:focus, input:focus, button:focus {
  // outline (on focus)
  outline: none;
}

</style>