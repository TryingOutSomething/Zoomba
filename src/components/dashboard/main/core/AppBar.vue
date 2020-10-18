<template>
  <v-app-bar clipped-left app color="white" height="80">
    <v-img
      :src="zoombaLogoUrl"
      max-width="200"
      max-height="200"
      contain
    />
  </v-app-bar>
</template>

<script>
import { logoAssetLocation } from '@/mixins/interface'

export default {
  name: 'AppBar',
  mixins: [logoAssetLocation]
}
</script>

<style scoped>

</style>
