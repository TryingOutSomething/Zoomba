<template>
  <div>
    <v-col>
      <v-list-item @click="logout">
        <v-list-item-avatar
          :size="listItemStyles.avatarSize"
          :color="listItemStyles.avatarColour"
        >
          <v-icon
            :size="listItemStyles.iconSize"
            :color="listItemStyles.iconColour"
          >
            mdi-logout-variant
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="list-item-title">Log Out</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-col>

    <v-divider/>

    <v-container fluid class="pb-0">
      <v-col class="ml-2 py-0">
        <sns-icons space-between="mr-2"/>
        <p class="pt-2 mb-1 drawer-contact-us">Contact us at <u>ahpeiq@gmail.com</u></p>
        <p class="drawer-contact-us">Advance Software Engineering 20/21 TS3 TestyTest</p>
      </v-col>
    </v-container>

  </div>
</template>

<script>
import SnsIcons from '@/components/common/SnsIcons'
import { loginRoute } from '@/utils/urls'
import { logoutUser } from '@/services/firebase'

export default {
  name: 'DrawerCompanyInfo',
  components: { SnsIcons },

  props: {
    listItemStyles: {
      type: Object
    }
  },

  methods: {
    logout () {
      // logoutUser()
      //   .then(() => this.$router.push(loginRoute))
      //   .catch(err => window.alert(err))
    }
  }
}
</script>

<style scoped>

</style>
