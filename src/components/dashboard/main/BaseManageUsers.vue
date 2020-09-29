<template>
  <content-body content-header="Manage Users">
    <template v-slot:content>
      <user-table/>
    </template>
  </content-body>
</template>

<script>
import ContentBody from '@/components/dashboard/main/core/ContentBody'
import UserTable from '@/components/dashboard/main/Users/UserTable'

export default {
  name: 'BaseManageUser',
  components: {
    UserTable,
    ContentBody
  }
}
</script>

<style scoped>

</style>
