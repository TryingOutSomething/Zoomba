<template>
  <div>
    <v-col sm="6" class="mt-12">
      <v-select
        v-model="selectedGame"
        :items="games"
        outlined
        dense
      />
    </v-col>

    <v-data-table
      class="px-3"
      :headers="tableHeaders"
      :items="items"
    >
      <template v-slot:body="{ items }">
        <tbody>
        <tr
          v-for="(item, i) in items"
          :key="i"
        >
          <td>{{ item.name }}</td>

          <td class="text-end">
            <span class="pr-3">{{ item.score }}</span>
          </td>

          <td class="text-end">
            <v-icon color="black">mdi-dots-horizontal</v-icon>
          </td>
        </tr>
        </tbody>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'ScoreTable',

  data () {
    return {
      games: ['Game 1', 'Game 2', 'Game 3'],
      selectedGame: 'Game 1',

      tableHeaders: [
        {
          text: 'Patient Name',
          align: 'start',
          value: 'name',
          sortable: false
        },
        {
          text: 'Score',
          align: 'end',
          value: 'score',
          sortable: false
        },
        {
          text: '',
          align: 'center',
          value: 'actions',
          sortable: false
        }
      ],

      isLoading: false,

      items: [
        {
          name: 'test',
          score: 0
        },
        {
          name: 'test',
          score: 0
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
