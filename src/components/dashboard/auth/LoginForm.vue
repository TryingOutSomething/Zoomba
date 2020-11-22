<template>
  <v-card elevation="0">
    <v-row>
      <v-col>
        <v-text-field
          label="Email Address"
          clear-icon="mdi-close-circle"
          :rules="[validation.required, validation.email]"
          :hint="hint"
          persistent-hint
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
          :hint="hint"
          persistent-hint
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
import { isValidEmail, isIncompleteLoginForm } from '@/utils/validation'
import { inputValidators } from '@/mixins/validators'

export default {
  name: 'LoginForm',
  mixins: [inputValidators],

  data() {
    return {
      showPassword: false,
      iconButtonColour: '#868686',

      email: '',
      password: '',
      isLoading: false,
      hint: 'No login implemented currently. Click log in'
    }
  },

  computed: {
    displayShowOrHidePasswordText() {
      return this.showPassword ? 'Hide' : 'Show'
    }
  },

  methods: {
    login() {
      // Validation before submitting user input to backend
      // if (this.isInvalidForm()) {
      //   return
      // }

      this.isLoading = true

      // Handle auth here then
      this.$router.push(dashboardMainPageRoute)
    },

    isInvalidForm() {
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
