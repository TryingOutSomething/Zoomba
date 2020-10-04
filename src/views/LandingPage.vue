<template>
  <div>
    <base-nav-bar/>
    <base-hero/>
    <base-content/>
    <base-contact/>
    <scroll-to-top/>
    <page-footer color="landingPageTextColour">
      <template v-slot:socials>
        <v-row justify="end">
          <sns-icons/>
        </v-row>
      </template>
    </page-footer>
  </div>
</template>

<script>
import BaseNavBar from '@/components/landing-page/BaseNavBar'
import PageFooter from '@/components/common/PageFooter'
import BaseHero from '@/components/landing-page/BaseHero'
import BaseContent from '@/components/landing-page/BaseContent'
import BaseContact from '@/components/landing-page/BaseContact'
import ScrollToTop from '@/components/landing-page/ScrollToTop'
import SnsIcons from '@/components/common/SnsIcons'
import { palette } from '@/mixins/interface'

export default {
  name: 'LandingPage',
  components: {
    SnsIcons,
    ScrollToTop,
    BaseContact,
    BaseContent,
    BaseHero,
    BaseNavBar,
    PageFooter
  },
  mixins: [palette]
}
</script>

<style scoped>

</style>
