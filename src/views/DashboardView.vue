<template>
  <v-fade-transition mode="out-in">
    <v-container fluid>
      <app-bar />
      <app-drawer />

      <router-view/>
    </v-container>
  </v-fade-transition>
</template>

<script>
import AppBar from '@/components/dashboard/main/core/AppBar'
import AppDrawer from '@/components/dashboard/main/core/AppDrawer'
export default {
  name: 'DashboardView',
  components: { AppDrawer, AppBar }
}
</script>

<style scoped>

</style>
