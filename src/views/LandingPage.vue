<template>
  <div>
    <nav-bar/>
    <base-hero/>
    <base-content/>
    <base-contact/>
    <scroll-to-top/>
    <page-footer>
      <template v-slot:socials>
        <sns-icons/>
      </template>
    </page-footer>
  </div>
</template>

<script>
import NavBar from '@/components/landing-page/NavBar'
import PageFooter from '@/components/common/PageFooter'
import BaseHero from '@/components/landing-page/BaseHero'
import BaseContent from '@/components/landing-page/BaseContent'
import BaseContact from '@/components/landing-page/BaseContact'
import ScrollToTop from '@/components/landing-page/ScrollToTop'
import SnsIcons from '@/components/common/SnsIcons'

export default {
  name: 'LandingPage',
  components: {
    SnsIcons,
    ScrollToTop,
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
