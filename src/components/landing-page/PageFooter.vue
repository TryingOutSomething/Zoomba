<template>
  <v-footer class="font-weight-light">
    <v-container class="px-12">
      <v-row align="center">
        <span class="footer">
          Advance Software Engineering 20/21 TS3 TestyTest
        </span>

        <v-row justify="end">
          <v-icon class="mr-5" @click="launchFaceBookSite">mdi-facebook</v-icon>
          <v-icon @click="launchEmail">mdi-email-outline</v-icon>
        </v-row>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { websiteUrls } from '@/mixins/interface'

export default {
  name: 'PageFooter',
  mixins: [websiteUrls]
}
</script>

<style scoped>

</style>
