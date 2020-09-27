<template>
  <div>
    <nav-bar/>
    <base-hero/>
    <page-footer/>
  </div>
</template>

<script>
import NavBar from '@/components/landing-page/NavBar'
import PageFooter from '@/components/landing-page/PageFooter'
import BaseHero from '@/components/landing-page/BaseHero'

export default {
  name: 'LandingPage',
  components: {
    BaseHero,
    NavBar,
    PageFooter
  }
}
</script>

<style scoped>

</style>
