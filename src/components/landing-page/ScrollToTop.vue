<template>
  <v-fab-transition>
    <v-btn
      bottom
      fab
      fixed
      large
      right
      v-show="topOfThePage"
      v-scroll="onScroll"
      :color="landingPageButtonColour"
      class="mb-10 mr-10"
      @click="scrollToTop"
    >
      <v-icon :color="landingPageTextColour">mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
import { palette } from '@/mixins/interface'

export default {
  name: 'ScrollToTop',
  mixins: [palette],

  data () {
    return {
      topOfThePage: false
    }
  },

  methods: {
    scrollToTop () {
      this.$vuetify.goTo(0)
    },

    onScroll () {
      if (typeof window === 'undefined') return

      const top = (
        window.pageYOffset ||
        document.documentElement.offsetTop ||
        0
      )

      this.topOfThePage = top > 200
    }
  }

}
</script>

<style scoped>

</style>
