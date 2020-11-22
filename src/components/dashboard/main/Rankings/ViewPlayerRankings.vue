<template>
  <base-modal>
    <v-card-title>
      View Player's Score

      <v-spacer/>

      <v-icon @click="closeModal">mdi-close</v-icon>
    </v-card-title>

    <v-col class="px-6">
      <v-text-field
        v-model="viewingPlayerRanking.email"
        label="Patient's Email"
      />

      <v-text-field
        v-model="viewingPlayerRanking.name"
        label="Patient's Name"
      />

      <v-text-field
        v-model="viewingPlayerRanking.score"
        label="Patient Score"
      />
    </v-col>
  </base-modal>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'ViewPlayerRankings',

  computed: {
    ...mapState('scores', ['viewingPlayerRanking'])
  },

  methods: {
    ...mapMutations('app', ['toggleModalStatus']),
    ...mapMutations('scores', ['clearSelectedPlayerInfo']),

    closeModal() {
      this.clearSelectedPlayerInfo()
      this.toggleModalStatus()
    }
  }
}
</script>

<style scoped>

</style>
