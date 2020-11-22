<template>
  <v-card
    :color="landingPageBackgroundColour"
    class="mt-10"
    elevation="0"
    width="400"
  >
    <v-img :src="mapLocationPath" max-height="400" max-width="400" eager/>

    <v-container class="mt-7">
      <p class="text-center mb-2 image-caption">
        School of Computer Science and Engineering
      </p>
      <p class="text-center font-weight-light image-caption-subtitle">
        Singapore, Singapore
      </p>
    </v-container>
  </v-card>

</template>

<script>
import { palette } from '@/mixins/interface'

export default {
  name: 'OfficeLocation',
  mixins: [palette],

  data () {
    return {
      mapLocationPath: require('@/assets/MapLocation.png')
    }
  }
}
</script>

<style scoped>

</style>
