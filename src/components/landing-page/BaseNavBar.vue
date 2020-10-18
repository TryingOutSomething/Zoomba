<template>
  <v-app-bar
    :color="landingPageBackgroundColour"
    elevation="0"
    extended
    :extension-height="appBarExtensionHeight"
    :height="appBarHeight"
  >
    <mobile-nav-bar v-if="isMobileScreen"/>
    <large-nav-bar v-else/>
  </v-app-bar>
</template>

<script>
import LargeNavBar from '@/components/landing-page/NavBar/LargeNavBar'
import MobileNavBar from '@/components/landing-page/NavBar/MobileNavBar'
import { palette } from '@/mixins/interface'

export default {
  name: 'BaseNavBar',
  components: {
    MobileNavBar,
    LargeNavBar
  },
  mixins: [palette],

  computed: {
    isMobileScreen () {
      return this.$vuetify.breakpoint.smAndDown
    },

    appBarHeight () {
      return this.isMobileScreen ? 300 : 100
    },

    appBarExtensionHeight () {
      return this.isMobileScreen ? 0 : 70
    }
  }
}
</script>

<style scoped>

</style>
