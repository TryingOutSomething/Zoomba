<template>
  <div>
    <v-col sm="6" md="5" lg="5" xl="3" class="mt-12 pb-0">
      <v-select
        v-model="selectedGame"
        :items="games"
        outlined
        dense
        @change="getDataFirestore"
      />
    </v-col>

    <v-data-table
      class="px-3"
      :headers="tableHeaders"
      :items="users"
    >
      <template v-slot:body="{ items: users }">
        <tbody>
        <tr
          v-for="(user, i) in users"
          :key="i"
        >
          <td>{{ user.name }}</td>

          <td class="text-center">
            <span>{{ user.score }}</span>
          </td>

          <td class="text-end">
            <ranking-options/>
          </td>
        </tr>
        </tbody>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import RankingOptions from '@/components/dashboard/main/Rankings/RankingOptions'
import { getGameRankings } from '@/services/firebase'

export default {
  name: 'ScoreTable',
  components: { RankingOptions },

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
          align: 'center',
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

      users: []
    }
  },

  created () {
    this.getDataFirestore()
  },

  methods: {
    getDataFirestore () {
      getGameRankings(this.selectedGame).onSnapshot(querySnapShot => {
        if (this.users.length > 0) {
          this.users.splice(0, this.users.length)
        }
        querySnapShot.forEach(document => this.users.push(document.data()))
      }, err => window.alert(err.message))
    }
  }
}
</script>
