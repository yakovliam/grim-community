<template>
  <div>
    <!--  <svg viewBox="0 0 1440 320"><path class="svg-background" d="M0,256L34.3,234.7C68.6,213,137,171,206,160C274.3,149,343,171,411,160C480,149,549,107,617,85.3C685.7,64,754,64,823,96C891.4,128,960,192,1029,213.3C1097.1,235,1166,213,1234,218.7C1302.9,224,1371,256,1406,272L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>-->
    <div class="page">
      <div class="grid-container">
        <div class="row justify-content-center">
          <div class="col box">
            <v-toolbar dark flat color="#46b5d1">
              <!--            <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
              <v-toolbar-title>Grim</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn v-on:click="toProfile" icon>
                <v-icon>mdi-account-circle</v-icon>
              </v-btn>
            </v-toolbar>
            <div class="top-title">
              <div class="title-text">
                Grim
              </div>
              <div class="subtitle-text">
                It does stuff
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col box">
            <div class="elevated-box-wrapper float-1">
              <div class="elevated-box elevation-10">
                {{ randomGreeting() }}
                <div class="go-button">
                  <v-btn v-on:click="toProfile" block color="secondary" dark>
                    Go to<div class="weighted-button-text">Your Profile</div>
                  </v-btn>
                </div>
                <!--              <div class="subtitle-text-2">Designed for NA</div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import router from "@/router";
import Footer from "@/components/static/Footer";

export default {
  name: 'Home',
  components: {Footer},
  methods: {
    toProfile() {
      // push to profile page (it will automatically redirect to login if the user data doesn't exist!)
      router.push('/profile').catch(() => {
      });
    },
    randomGreeting() {
      // greetings
      const msgs = [
        ["What's up?", 10],
        ["Check it out!", 10],
        ["...Checking in?", 10],
        ["Welcome!", 10],
        ["How's it going?", 10],
        ["Yeah, sometimes.", 1],
        ["Uh, okay?", 1],
          ["Dude, stop. That's not normal.", 0.1]
      ];

      // Storage for our flat array.
      let out = [];

      // Loop through the master entries.
      for (let i = 0; i < msgs.length; ++i) {
        // Push the value over and over again according to its
        // weight.
        for (let j = 0; j < msgs[i][1]; ++j) {
          out.push(msgs[i][0]);
        }
      }

      // And done! Now we can return the random greeting
      return out[Math.floor(Math.random() * out.length)];
    }
  }
}
</script>

<style lang="scss" scoped>

.page {
  background-color: #46b5d1;
  color: white;

  width: 100%;
  min-height: 100vh;
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
  padding-top: 10rem;
  padding-bottom: 5rem;
  display: inline-block;
}

@media (max-width: 500px) {
  .top-title {
    padding-top: 5rem;
  }
}

.title-text {
  // font
  font-size: 100px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: white;
  width: fit-content;

  text-shadow: 1px 1px #fe4902,
  2px 2px #fe4902,
  3px 3px #fe4902,
  4px 4px #fe4902,
  5px 5px #fe4902,
  5px 6px #fe4902,
  7px 7px #fe4902,
  8px 8px #fe4902;

  &:hover {
    position: relative;
    top: -3px;
    left: -3px;
    text-shadow: 1px 1px #fe4902,
    2px 2px #fe4902,
    3px 3px #fe4902,
    4px 4px #fe4902,
    5px 5px #fe4902,
    6px 6px #fe4902,
    7px 7px #fe4902,
    8px 8px #fe4902,
    9px 9px #fe4902,
    10px 10px #fe4902,
    11px 11px #fe4902,
    12px 12px #fe4902;
  }
}

.subtitle-text {
  // font
  font-family: 'Montserrat', sans-serif;
  color: white;

  // positioning / design
  padding-top: 5px;
  text-align: center;

  // font
  font-size: 20px;
  font-weight: 600;
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

.weighted-button-text {
  padding-left: 5px;
  font-weight: 900;
}

.go-button {
  padding-top: 10px;
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