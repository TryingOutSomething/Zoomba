<template>
  <div>
    <v-col sm="6" class="mt-12 pb-0">
      <v-text-field label="Add Patient" outlined dense/>
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

export default {
  name: 'UserTable',
  components: { UserOptions },
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
