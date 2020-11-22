<template>
  <div>
    <v-icon
      :color="iconColour"
      :class="spaceBetween"
      @click="launchFaceBookSite"
    >
      mdi-facebook
    </v-icon>

    <v-icon
      :color="iconColour"
      :class="spaceBetween"
      @click="launchGitHubSite"
    >
      mdi-github
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
    },

    spaceBetween: {
      type: String,
      default: 'mr-5'
    }
  }
}
</script>
