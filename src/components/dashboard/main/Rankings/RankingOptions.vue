<template>
  <table-menu-options>
    <template v-slot:options>
      <v-list>
        <v-list-item>
          <v-list-item-title class="table-menu-item">View Score Details</v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </table-menu-options>
</template>

<script>
import TableMenuOptions from '@/components/dashboard/main/core/TableMenuOptions'

export default {
  name: 'RankingOptions',
  components: { TableMenuOptions }
}
</script>

<style scoped>

</style>
