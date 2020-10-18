<template>
  <v-container class="px-12">
    <v-col>
      <v-row justify="center">
        <v-img
          :src="zoombaLogoUrl"
          alt="Zoomba Logo"
          contain
          max-height="57"
          max-width="205"
        />
      </v-row>
    </v-col>

    <v-col>
      <v-row justify="center">
        <v-btn
          :color="landingPageTextColour"
          class="text-capitalize py-5 nav-bar-font"
          text
          @click="scrollToContent"
        >
          About
        </v-btn>
      </v-row>

      <v-row justify="center">
        <v-btn
          :color="landingPageTextColour"
          class="text-capitalize py-5 nav-bar-font"
          text
          @click="scrollToContact"
        >
          Contact
        </v-btn>
      </v-row>

      <v-row justify="center" class="mt-3">
        <v-btn
          :color="landingPageTextColour"
          class="text-capitalize py-5 px-7 white-border-text-btn"
          text
          @click="redirectToLoginPage"
        >
          Login
        </v-btn>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { logoAssetLocation, palette } from '@/mixins/interface'
// import { loginRoute } from '@/utils/urls'

export default {
  name: 'MobileNavBar',
  mixins: [logoAssetLocation, palette],

  methods: {
    scrollToContent () {
      this.$vuetify.goTo('#content')
    },

    scrollToContact () {
      this.$vuetify.goTo('#contact')
    },

    redirectToLoginPage () {
      // this.$router.push(loginRoute)
    }
  }
}
</script>

<style scoped>

</style>
