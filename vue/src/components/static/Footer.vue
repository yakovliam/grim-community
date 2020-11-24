<template>
  <v-footer
      dark
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Thanks for visiting!</strong>

        <v-spacer></v-spacer>

        <v-btn
            class="mx-4"
            dark
            icon
            href="https://www.github.com/yakovliam"
        >
          <v-icon size="24px">mdi-github</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        &copy; {{ siteName }} {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      siteName: process.env.VUE_APP_SITE_NAME,
    }
  }
}
</script>

<style lang="scss">
</style>