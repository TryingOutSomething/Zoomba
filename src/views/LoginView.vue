<template>
  <v-fade-transition mode="out-in">
    <v-container fluid fill-height>
      <v-col class="mt-12">
        <v-row align="center" justify="center">
          <v-img
            :src="zoombaLogoSloganUrl"
            style="cursor: pointer"
            max-height="200"
            max-width="500"
            @click="redirectToLandingPage"
            contain
          />
        </v-row>

        <v-row class="mt-12" align="center" justify="center">
          <v-col sm="2" lg="3" xl="2">
            <router-view/>
          </v-col>
        </v-row>
      </v-col>

      <v-container fluid>
        <contact-us-bar/>
      </v-container>
    </v-container>
  </v-fade-transition>
</template>

<script>
import { mapMutations } from 'vuex'
import { logoAssetLocation } from '@/mixins/interface'

export default {
  name: 'LoginView',
  mixins: [logoAssetLocation],

  created () {
    this.changeToLoginBackgroundColour()
  },

  beforeDestroy () {
    this.changeToMainBackgroundColour()
  },

  methods: {
    ...mapMutations('app', [
      'changeToLoginBackgroundColour',
      'changeToMainBackgroundColour'
    ]),

    redirectToLandingPage() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
