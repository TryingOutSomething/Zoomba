<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-btn
        :color="landingPageTextColour"
        class="mr-12"
        icon
        x-large
        @click="model--"
      >
        <v-icon size="70">mdi-chevron-left</v-icon>

      </v-btn>
      <v-card class="mt-5" elevation="24" max-height="400" max-width="750">
        <v-carousel
          v-model="model"
          :show-arrows="displayArrows"
          cycle
          height="400"
          hide-delimiter-background
          interval="10000"
        >
          <v-carousel-item v-for="(image, i) in images" :key="i" :src="image.src">
          </v-carousel-item>
        </v-carousel>
      </v-card>

      <v-btn
        :color="landingPageTextColour"
        class="ml-12"
        icon
        x-large
        @click="model++"
      >
        <v-icon size="70">mdi-chevron-right</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { palette } from '@/mixins/commons'

export default {
  name: 'Carousel',
  mixins: [palette],

  data () {
    return {
      images: [
        { src: 'https://i.imgflip.com/18ps27.jpg' },
        { src: 'https://www.laconchakeywest.com/resourcefiles/mainimages/location-directions-of-key-west-hotel-top.jpg' },
        { src: 'https://i.ytimg.com/vi/le-qzrEHOxQ/maxresdefault.jpg' }
      ],

      model: 0,
      displayArrows: false
    }
  }
}
</script>

<style scoped>

</style>
