<template>
  <v-col>
    <v-row align="center" justify="center">
      <v-btn
        v-show="isMobileScreen"
        :color="landingPageTextColour"
        class="mr-12"
        icon
        x-large
        @click="model--"
      >
        <v-icon size="70">mdi-chevron-left</v-icon>
      </v-btn>

      <v-card class="mt-5" elevation="24" max-height="400" width="700">
        <v-carousel
          v-model="model"
          :show-arrows="!isMobileScreen"
          cycle
          height="400"
          hide-delimiter-background
          interval="10000"
        >
          <v-carousel-item v-for="(image, i) in images" :key="i" :src="image.src" eager>
          </v-carousel-item>
        </v-carousel>
      </v-card>

      <v-btn
        v-show="isMobileScreen"
        :color="landingPageTextColour"
        class="ml-12"
        icon
        x-large
        @click="model++"
      >
        <v-icon size="70">mdi-chevron-right</v-icon>
      </v-btn>
    </v-row>
  </v-col>
</template>

<script>
import { logoAssetLocation, palette } from '@/mixins/interface'

export default {
  name: 'Carousel',
  mixins: [logoAssetLocation, palette],

  data () {
    return {
      images: [
        { src: require('@/assets/BoxDrop.png') },
        { src: require('@/assets/StarCollector.png') },
        { src: require('@/assets/FlappyBird.png') }
      ],

      model: 0
    }
  },

  computed: {
    isMobileScreen () {
      return !this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>

<style scoped>

</style>
