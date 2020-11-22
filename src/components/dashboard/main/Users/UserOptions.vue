<template>
  <table-menu-options>
    <template v-slot:options>
      <v-list-item @click="deletePatient">
        <v-list-item-title class="table-menu-item">
          Delete User
        </v-list-item-title>
      </v-list-item>
    </template>
  </table-menu-options>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UserOptions',

  props: {
    user: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapActions('user', ['deletePlayer']),

    deletePatient() {
      if (!this.confirmDeletion()) {
        return
      }

      this.deletePlayer(this.user)
        .catch(err => console.log(err))
    },

    confirmDeletion() {
      return window.confirm(`Are you sure that you want to delete user ${this.user.name}?`)
    }
  }
}
</script>

<style scoped>

</style>
