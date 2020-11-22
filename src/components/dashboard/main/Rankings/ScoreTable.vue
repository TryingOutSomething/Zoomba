<template>
  <div>
    <view-player-rankings/>

    <v-col sm="6" md="5" lg="5" xl="3" class="mt-12 pb-0">
      <v-select
        v-model="selectedGame"
        :items="games"
        item-text="name"
        item-value="id"
        return-object
        outlined
        dense
        @change="getDataFromServer"
      />
    </v-col>

    <v-data-table
      class="px-3"
      :headers="tableHeaders"
      :items="rankings"
      :loading="isLoading"
      loading-text="Loading Data..."
    >
      <template v-slot:progress>
        <v-row>
          <v-progress-linear
            color="#ffa924"
            indeterminate
          />
        </v-row>
      </template>

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
            <ranking-options :player-ranking="user"/>
          </td>
        </tr>
        </tbody>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import RankingOptions from '@/components/dashboard/main/Rankings/RankingOptions'
import ViewPlayerRankings from '@/components/dashboard/main/Rankings/ViewPlayerRankings'

export default {
  name: 'ScoreTable',
  components: {
    ViewPlayerRankings,
    RankingOptions
  },

  data() {
    return {
      games: [
        {
          name: 'Flappy Bird',
          id: 'flappy_bird'
        },
        {
          name: 'Stars Collector',
          id: 'stars_collector'
        },
        {
          name: 'Box Drop',
          id: 'box_drop'
        }
      ],
      selectedGame: {
        name: 'Flappy Bird',
        id: 'flappy_bird'
      },

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

      isLoading: false
    }
  },

  created() {
    this.getDataFromServer()
  },

  computed: {
    ...mapState('scores', ['rankings'])
  },

  methods: {
    ...mapActions('scores', ['fetchPlayerRankings']),

    getDataFromServer() {
      this.isLoading = true
      this.fetchPlayerRankings(this.selectedGame.id)
        .catch(err => console.log(err))
        .finally(this.isLoading = false)
    }
  }
}
</script>
