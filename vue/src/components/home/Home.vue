<template>
  <!--  <svg viewBox="0 0 1440 320"><path class="svg-background" d="M0,256L34.3,234.7C68.6,213,137,171,206,160C274.3,149,343,171,411,160C480,149,549,107,617,85.3C685.7,64,754,64,823,96C891.4,128,960,192,1029,213.3C1097.1,235,1166,213,1234,218.7C1302.9,224,1371,256,1406,272L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>-->
  <div class="page">
    <div class="grid-container">
      <div class="row justify-content-center">
        <div class="col box">
          <v-toolbar dark flat color="#46b5d1">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Vue Chat</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-on:click="toProfile" icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </v-toolbar>
          <div class="top-title">
            <div class="title-text">
              Vue Chat
              <div class="subtitle-text">
                A live chat experience
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col box">
          <div class="elevated-box-wrapper float-1">
            <div class="elevated-box elevation-10">
              Want to chat with your friends?
              <div class="go-button">
                <v-btn v-on:click="toProfile" block color="secondary" dark>Go to
                  <div class="weighted-button-text">Your Profile</div>
                </v-btn>
              </div>
              <div class="subtitle-text-2">Designed for NA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../../router';

export default {
  name: 'Home',
  methods: {
    toProfile: () => {
      // push to profile page (it will automatically redirect to login if the user data doesn't exist!)
      router.push('profile');
    }
  }
}
</script>

<style lang="scss" scoped>

.page {
  background: #46b5d1;
  color: white;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow-y: hidden;
  overflow-x: hidden;
}

.grid-container {
  text-align: center;
}

.box {
  // margin (remove unwanted :()
  margin-top: -12px;
}

/* -------------------- TITLE -------------------- */

.top-title {
  padding-top: 14rem;
  padding-bottom: 5rem;
}

@media (max-width: 500px) {
  .top-title {
    padding-top: 5rem;
  }
}

.title-text {
  // font
  font-size: 40px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: white;

  .subtitle-text {
    // positioning / design
    padding-top: 5px;
    text-align: center;

    // font
    font-size: 20px;
    font-weight: 600;
  }
}

/* -------------------- BOX ELEVATED -------------------- */

.elevated-box-wrapper {
  // text
  text-align: center;
  // display
  display: inline-block;
}

.elevated-box {
  // padding
  padding: 30px;

  // background
  background: white;

  // text color
  color: black;

  // dimensions
  width: 100%;
  height: 100%;

  // border
  border-radius: 30px;
  border-style: none;

  // font
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
}

@media (max-width: 500px) {
  .elevated-box {
    padding: 5%;

    height: 50%;
  }
}

.weighted-button-text {
  padding-left: 5px;
  font-weight: 900;
}

.go-button {
  padding-top: 30px;
}

.subtitle-text-2 {
  padding-top: 20px;

  // font
  font-size: 13px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}

.float-1 {
  animation: float 3s ease-in-out infinite;
}

/* ANIMATIONS */

/* Float Background Animation */

@keyframes float {
  $floatRandomAmt: 20;
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey($floatRandomAmt + px);
  }
  100% {
    transform: translatey(0px);
  }
}


</style>