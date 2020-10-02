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
      :items="items"
    >
      <template v-slot:body="{ items }">
        <tbody>
        <tr
          v-for="(item, i) in items"
          :key="i"
        >
          <td>{{ item.name }}</td>

          <td class="text-center">
            {{ item.email }}
          </td>

          <td class="text-end">
            <user-options/>
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

export default {
  name: 'UserTable',
  components: {
    AddPatient,
    UserOptions
  },
  mixins: [palette],

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

      items: [
        {
          name: 'testtt',
          email: 'HideThePain@email.com'
        },
        {
          name: 'test',
          email: 'HideThePain@email.com'
        }
      ]
    }
  }
}
</script>
