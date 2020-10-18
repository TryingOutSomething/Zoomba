<template>
  <v-card elevation="0">
    <v-row>
      <v-col>
        <v-text-field
          label="Email Address"
          clear-icon="mdi-close-circle"
          :rules="[validation.required, validation.email]"
          clearable
          v-model="email"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          label="Password"
          :type="showPassword? 'text' : 'password'"
          :rules="[validation.required]"
          v-model="password"
          @keydown.enter="login"
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
          :loading="isLoading"
          @click="login"
        >
          Log In
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { dashboardMainPageRoute } from '@/utils/urls'
import { authenticateUser } from '@/services/firebase'
import { isValidEmail, isIncompleteLoginForm } from '@/utils/validation'
import { inputValidators } from '@/mixins/validators'

export default {
  name: 'LoginForm',
  mixins: [inputValidators],

  data () {
    return {
      showPassword: false,
      iconButtonColour: '#868686',

      email: '',
      password: '',
      isLoading: false
    }
  },

  computed: {
    displayShowOrHidePasswordText () {
      return this.showPassword ? 'Hide' : 'Show'
    }
  },

  methods: {
    login () {
      if (this.isInvalidForm()) {
        return
      }

      this.isLoading = true

      authenticateUser(this.email, this.password)
        .then(() => {
          this.$router.push(dashboardMainPageRoute)
        })
        .catch(err => {
          this.isLoading = false
          window.alert(err)
        })
    },

    isInvalidForm () {
      if (isIncompleteLoginForm(this.email, this.password)) {
        window.alert('Email or password are required!')

        return true
      }

      if (!isValidEmail(this.email)) {
        window.alert('Invalid Email!')

        return true
      }

      return false
    }
  }
}
</script>

<style scoped>

</style>
