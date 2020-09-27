<template>
  <div>
    <nav-bar/>
    <base-hero/>
    <base-content/>
    <base-contact/>
    <page-footer/>
  </div>
</template>

<script>
import NavBar from '@/components/landing-page/NavBar'
import PageFooter from '@/components/landing-page/PageFooter'
import BaseHero from '@/components/landing-page/BaseHero'
import BaseContent from '@/components/landing-page/BaseContent'
import BaseContact from '@/components/landing-page/BaseContact'

export default {
  name: 'LandingPage',
  components: {
    BaseContact,
    BaseContent,
    BaseHero,
    NavBar,
    PageFooter
  }
}
</script>

<style scoped>

</style>
