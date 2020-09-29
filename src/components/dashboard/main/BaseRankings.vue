<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col sm="8">
        <v-card elevation="0">
          <v-container class="px-5">
            <v-col>
              <h1 class="content-body-header">Patient’s Game Score</h1>

              <v-divider/>
            </v-col>

            <score-table/>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ScoreTable from '@/components/dashboard/main/Rankings/ScoreTable'

export default {
  name: 'BaseRankings',
  components: { ScoreTable }
}
</script>

<style scoped>

</style>
