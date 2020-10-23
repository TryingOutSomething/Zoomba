<template>
  <v-navigation-drawer app clipped permanent width="280">
    <v-container fluid>
      <v-col class="pt-0">
        <h3>Manage Page</h3>
        <p class="mt-3 user-role">Therapist</p>
      </v-col>

      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            color="rgba(76, 101, 233)"
          >
            <v-list-item-avatar
              :size="listItemStyles.avatarSize"
              :color="listItemStyles.avatarColour"
            >
              <v-icon
                :size="listItemStyles.iconSize"
                :color="listItemStyles.iconColour"
                v-text="link.icon"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="list-item-title" v-text="link.text"/>
            </v-list-item-content>

          </v-list-item>
        </v-list-item-group>
        <v-spacer/>
      </v-list>
    </v-container>

    <template v-slot:append>
      <drawer-company-info :list-item-styles="listItemStyles"/>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { dashboardRankingRoute, dashboardUserRoute } from '@/utils/urls'
import DrawerCompanyInfo from '@/components/dashboard/main/core/DrawerCompanyInfo'

export default {
  name: 'AppDrawer',
  components: { DrawerCompanyInfo },
  data () {
    return {
      links: [
        {
          to: dashboardRankingRoute,
          icon: 'mdi-podium',
          text: 'Rankings',
          name: 'View Rankings'
        },
        {
          to: dashboardUserRoute,
          icon: 'mdi-account',
          text: 'Manage Users',
          name: 'Users'
        }
      ],

      listItemStyles: {
        avatarColour: '#E4E6EB',
        avatarSize: 35,
        iconColour: '#60666D',
        iconSize: 20
      }

    }
  }
}
</script>

<style scoped>

</style>
