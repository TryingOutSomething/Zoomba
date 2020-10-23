<template>
  <v-container fluid>
    <v-row align="center" class="mt-12" justify="center">
      <v-card
        v-for="content in contentList"
        :key="content.icon"
        :color="landingPageTextColour"
        class="mx-10 my-12"
        elevation="0"
        width="300"
        height="150"
      >
        <v-row align="start" class="mx-0">
          <v-icon :color="landingPageButtonColour" size="3em">{{ content.icon }}</v-icon>

          <v-col class="py-0 pl-2">
            <v-card-title class="pt-0 pb-1">{{ content.title }}</v-card-title>
            <v-card-text class="text-justify">{{ content.description }}</v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <v-row align="start" justify="center">
      <v-card
        :height="contentImage.fixedHeight"
        :width="contentImage.fixedWidth"
        class="mt-12"
        elevation="10"
      >
        <v-img
          :height="contentImage.fixedHeight"
          :src="contentImage.src"
          :width="contentImage.fixedWidth"
          eager
        />
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { palette } from '@/mixins/interface'

export default {
  name: 'ContentDescription',
  mixins: [palette],

  data () {
    return {
      contentList: [
        {
          icon: 'mdi-head-cog',
          title: 'Train Your Mind',
          description: 'By combining motion detection and games, you can train your reflexes and reactions'
        },
        {
          icon: 'mdi-podium-gold',
          title: 'Climb Up The Ranks',
          description: 'Compete with others by sharing your scores on social media platforms'
        },
        {
          icon: 'mdi-headset',
          title: 'Always By You',
          description: 'Get support from us when you have any issues. We\'re here 24/7'
        }
      ],

      contentImage: {
        src: require('@/assets/StarCollector.gif'),
        fixedWidth: 710,
        fixedHeight: 345
      }
    }
  }
}
</script>

<style scoped>

</style>
