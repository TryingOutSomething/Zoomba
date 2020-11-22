<template>
  <table-menu-options>
    <template v-slot:options>
      <v-list>
        <v-list-item>
          <v-list-item-title class="table-menu-item">
            <v-btn
              class="text-capitalize pa-0"
              text
              @click="displayUserRanking"
            >
              <p class="mb-0 table-menu-item-option font-weight-regular">
                View Score Details
              </p>
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </table-menu-options>
</template>

<script>
import { mapMutations } from 'vuex'
import TableMenuOptions from '@/components/dashboard/main/core/TableMenuOptions'

export default {
  name: 'RankingOptions',
  components: { TableMenuOptions },

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
