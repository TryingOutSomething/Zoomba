<template>
  <v-row class="mt-12" justify="center">
    <v-btn :color="landingPageButtonColour" class="py-9 px-12" x-large>
      <v-icon
        :color="landingPageTextColour"
        class="pl-12"
        large
      >
        mdi-cloud-download
      </v-icon>

      <h1
        class="ml-2 pr-12 text-capitalize font-weight-medium download-button"
      >
        Download
      </h1>
    </v-btn>
  </v-row>
</template>

<script>
import { palette } from '@/mixins/interface'

export default {
  name: 'Download',
  mixins: [palette]
}
</script>
