<template>
  <v-col>
    <v-row class="mt-12" justify="center">
      <a :href="downloadUrl" class="download-button-link">
        <v-btn :color="landingPageButtonColour" class="py-9 px-md-12" x-large>
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
      </a>
    </v-row>
  </v-col>
</template>

<script>
import { palette } from '@/mixins/interface'

export default {
  name: 'Download',
  mixins: [palette],

  data() {
    return {
      downloadUrl: 'http://13.212.29.41:5000/Zoomba_Client_V1.1.0.zip'
    }
  }
}
</script>
