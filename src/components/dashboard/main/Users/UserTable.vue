<template>
  <div>
    <add-patient v-model="dialogIsOpen"/>

    <v-btn
      class="ml-3 mt-12 px-7 py-5"
      :color="landingPageButtonColour"
      @click="dialogIsOpen = true"
    >
      <span class="add-patient-button text-capitalize">Add Patient</span>
    </v-btn>

    <v-data-table
      class="px-3 mt-7"
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
import UserOptions from '@/components/dashboard/main/Users/UserOptions'
import AddPatient from '@/components/dashboard/main/Users/AddPatient'
import { palette } from '@/mixins/interface'
import { getAllPatients } from '@/services/firebase'

export default {
  name: 'UserTable',
  components: {
    AddPatient,
    UserOptions
  },
  mixins: [palette],

  data () {
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
      dialogIsOpen: false,

      users: []
    }
  },

  firestore: {
    users: getAllPatients()
  }
}
</script>
