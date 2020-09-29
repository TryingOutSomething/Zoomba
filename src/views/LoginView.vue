<template>
  <v-fade-transition mode="out-in">
    <v-container class="" fluid fill-height>
      <v-col class="mt-12">
        <v-row align="center" justify="center">
          <v-img :src="zoombaLogoSloganUrl" max-height="200" max-width="500" contain/>
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
import ContactUsBar from '@/components/dashboard/main/core/ContactUsBar'

export default {
  name: 'LoginView',
  components: { ContactUsBar },
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
    ])
  }
}
</script>

<style scoped>

</style>
