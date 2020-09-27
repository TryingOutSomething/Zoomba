<template>
  <v-app-bar :color="landingPageBackgroundColour" elevation="0" height="100">
    <v-container class="px-12">
      <v-row align="center">
        <v-img
          :src="zoombaLogoUrl"
          alt="Zoomba Logo"
          contain
          max-height="57"
          max-width="205"
        />

        <v-spacer/>

        <v-row justify="center">
          <v-btn
            :color="landingPageTextColour"
            class="text-capitalize mr-5 py-5 nav-bar-font"
            text
            @click="scrollToContent"
          >
            About
          </v-btn>
          <v-btn
            :color="landingPageTextColour"
            class="text-capitalize py-5 nav-bar-font"
            text
            @click="scrollToContact"
          >
            Contact
          </v-btn>
        </v-row>

        <v-btn
          :color="landingPageTextColour"
          class="text-capitalize py-5 px-7 white-border-text-btn"
          text
        >
          Login
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { imageAssetLocations, palette } from '@/mixins/commons'

export default {
  name: 'NavBar',
  mixins: [imageAssetLocations, palette],

  methods: {
    scrollToContent () {
      document.getElementById('content').scrollIntoView({ behavior: 'smooth' })
    },

    scrollToContact () {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>

</style>
