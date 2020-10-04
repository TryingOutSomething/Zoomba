<template>
  <v-container class="px-0 pt-0 py-7 hero-content" fluid>
    <v-row>
      <v-col>
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
import Download from '@/components/landing-page/Hero/Download'

export default {
  name: 'BaseHero',
  components: {
    Download,
    HeroTitle,
    Carousel
  }
}
</script>
