<template>
  <v-card elevation="0" :color="landingPageTextColour">
    <v-row>
      <v-col>
        <v-text-field
          label="Email Address"
          clear-icon="mdi-close-circle"
          clearable
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          label="Password"
          :type="showPassword? 'text' : 'password'"
        >
          <template v-slot:append>
            <v-btn
              text
              :color="iconButtonColour"
              @click="showPassword = !showPassword"
            >
              {{ displayShowOrHidePasswordText }}
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
          class="text-capitalize"
          color="primary"
          block
          depressed
          @click="login"
        >
          Log In
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { palette } from '@/mixins/interface'
import { dashboardMainPageRoute } from '@/utils/urls'

export default {
  name: 'LoginForm',
  mixins: [palette],

  data () {
    return {
      showPassword: false,
      iconButtonColour: '#868686'
    }
  },

  computed: {
    displayShowOrHidePasswordText () {
      return this.showPassword ? 'Hide' : 'Show'
    }
  },

  methods: {
    login () {
      // validate

      this.$router.push(dashboardMainPageRoute)
    }
  }
}
</script>

<style scoped>

</style>
