<template>
  <content-body content-header="Patient’s Game Score">
    <template v-slot:content>
      <score-table/>
    </template>
  </content-body>
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
