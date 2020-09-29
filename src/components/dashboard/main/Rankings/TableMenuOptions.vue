<template>
  <v-menu top right transition="scale-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        dark
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon color="black">mdi-dots-horizontal</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item>
        <v-list-item-title class="table-menu-item">Delete User</v-list-item-title>
      </v-list-item>
    </v-list>

  </v-menu>
</template>
<script>
export default {
  name: 'table-menu-options'
}
</script>
