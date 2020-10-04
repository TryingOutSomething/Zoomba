<template>
  <table-menu-options>
    <template v-slot:options>
      <v-list>
        <v-list-item @click="deletePatientFromDb">
          <v-list-item-title class="table-menu-item">
            Delete User
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </table-menu-options>
</template>

<script>
import TableMenuOptions from '@/components/dashboard/main/core/TableMenuOptions'
import { deletePatient } from '@/services/firebase'

export default {
  name: 'UserOptions',
  components: { TableMenuOptions },

  props: {
    user: {
      type: Object,
      required: true
    }
  },

  methods: {
    async deletePatientFromDb () {
      const { id } = this.user
      try {
        await deletePatient(id)
      } catch (err) {
        window.alert(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
