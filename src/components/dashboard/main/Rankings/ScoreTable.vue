<template>
  <div>
    <v-col sm="6" md="5" lg="5" xl="3" class="mt-12 pb-0">
      <v-select
        v-model="selectedGame"
        :items="games"
        item-text="name"
        item-value="id"
        return-object
        outlined
        dense
        @change="getDataFirestore"
      />
    </v-col>

    <v-data-table
      class="px-3"
      :headers="tableHeaders"
      :items="users"
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

      isLoading: false,
      users: [],
      unsubscribeToChanges: null
    }
  },

  created () {
    this.getDataFirestore()
  },

  beforeDestroy () {
    this.unsubscribeToChanges()
  },

  methods: {
    getDataFirestore () {
      this.isLoading = true

      this.unsubscribeToChanges = getGameRankings(this.selectedGame.id).onSnapshot(querySnapShot => {
        if (this.users.length > 0) {
          this.users.splice(0, this.users.length)
        }
        querySnapShot.forEach(document => this.users.push(document.data()))

        this.users.sort((a, b) => parseInt(a.score) > parseInt(b.score) ? -1 : 1)

        this.isLoading = false
      }, err => {
        window.alert(err.message)
        this.isLoading = false
      })
    }
  }
}
</script>
