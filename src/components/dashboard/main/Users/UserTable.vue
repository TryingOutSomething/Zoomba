<template>
  <div>
    <add-patient/>

    <v-btn
      class="ml-3 mt-12 px-7 py-5"
      :color="landingPageButtonColour"
      @click="toggleModalStatus"
    >
      <span class="add-patient-button text-capitalize">Add Patient</span>
    </v-btn>

    <v-data-table
      class="px-3 mt-7"
      :headers="tableHeaders"
      :items="players"
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
            {{ user.email }}
          </td>

          <td class="text-end">
            <user-options :user="user"/>
          </td>
        </tr>
        </tbody>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import { palette } from '@/mixins/interface'
import UserOptions from '@/components/dashboard/main/Users/UserOptions'
import AddPatient from '@/components/dashboard/main/Users/AddPatient'

export default {
  name: 'UserTable',
  components: {
    AddPatient,
    UserOptions
  },
  mixins: [palette],

  data() {
    return {
      tableHeaders: [
        {
          text: 'Patient Name',
          align: 'start',
          value: 'name',
          sortable: false
        },
        {
          text: 'Patient Email',
          align: 'center',
          value: 'email',
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
      dialogIsOpen: false
    }
  },

  created() {
    this.fetchPlayers()
  },

  computed: {
    ...mapState('user', ['players'])
  },

  methods: {
    ...mapActions('user', ['fetchAllPlayers']),
    ...mapMutations('app', ['toggleModalStatus']),

    fetchPlayers() {
      this.isLoading = true

      this.fetchAllPlayers()
        .catch(err => console.log(err))
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false
          }, 300)
        })
    }
  }
}
</script>
