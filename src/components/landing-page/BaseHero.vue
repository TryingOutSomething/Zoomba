<template>
  <v-container class="pa-0 hero-content" fluid>
    <v-row class="pt-12" justify="center">
      <v-col class="pt-12">
        <hero-title/>
        <carousel/>
        <download/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carousel from '@/components/landing-page/Hero/Carousel'
import HeroTitle from '@/components/landing-page/Hero/HeroTitle'
import Download from '@/components/landing-page/Download'

export default {
  name: 'BaseHero',
  components: {
    Download,
    HeroTitle,
    Carousel
  }
}
</script>
