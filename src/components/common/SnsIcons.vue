<template>
  <div>
    <v-icon
      :color="iconColour"
      class="mr-5"
      @click="launchFaceBookSite"
    >
      mdi-facebook
    </v-icon>

    <v-icon
      :color="iconColour"
      @click="launchEmail"
    >
      mdi-email-outline
    </v-icon>
  </div>
</template>

<script>
import { websiteUrls } from '@/mixins/interface'
export default {
  name: 'sns-icons',
  mixins: [websiteUrls],

  props: {
    iconColour: {
      type: String,
      default: '#000000'
    }
  }
}
</script>
