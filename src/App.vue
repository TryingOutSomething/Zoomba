<template>
  <v-app>
    <v-main :class="contentBodyColour">
      <transition mode="out-in">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('app', ['contentBodyColour'])
  }
}
</script>

<style lang="scss">
@import "styles/index";
</style>
