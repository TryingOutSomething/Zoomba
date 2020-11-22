<template>
  <table-menu-options>
    <template v-slot:options>
      <v-list-item @click="displayUserRanking">
        <v-list-item-title class="table-menu-item">
          View Score Details
        </v-list-item-title>
      </v-list-item>
    </template>
  </table-menu-options>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'RankingOptions',

  props: {
    playerRanking: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapMutations('app', ['toggleModalStatus']),
    ...mapMutations('scores', ['populateSelectedPlayerInfo']),

    displayUserRanking() {
      this.populateSelectedPlayerInfo(this.playerRanking)
      this.toggleModalStatus()
    }
  }
}
</script>

<style scoped>

</style>
