<template>
  <base-modal>
    <v-card-title>
      Register Patient

      <v-spacer/>

      <v-icon @click="closeModal">mdi-close</v-icon>
    </v-card-title>

    <v-form ref="registerPlayer">
      <v-col class="px-6">
        <v-text-field
          v-model="email"
          :rules="[validation.required, validation.email]"
          label="Patient Email"
        />

        <v-text-field
          v-model="name"
          :rules="[validation.required]"
          label="Patient Name"
          @keydown.enter="registerPatient"
        />
      </v-col>

      <v-card-actions class="pr-4 pb-7 pt-0">
        <v-spacer/>

        <v-btn
          :loading="isLoading"
          text
          @click="registerPatient"
        >
          Add Patient
        </v-btn>
      </v-card-actions>
    </v-form>
  </base-modal>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import { inputValidators } from '@/mixins/validators'
import { isIncompleteRegistrationForm, isValidEmail } from '@/utils/validation'

export default {
  name: 'AddPatient',
  mixins: [inputValidators],

  props: {
    value: {
      type: Boolean
    }
  },

  data() {
    return {
      email: '',
      name: '',
      isLoading: false
    }
  },

  methods: {
    ...mapActions('user', ['addPlayer']),
    ...mapMutations('app', ['toggleModalStatus']),

    registerPatient() {
      // Validation before submitting user input to backend
      // if (this.isInvalidForm()) {
      //   return
      // }

      this.isLoading = true

      this.addPlayer({
        email: this.email,
        name: this.name
      })
        .then(() => {
          window.alert('User created successfully!')
          this.closeModal()
        })
        .catch(err => {
          window.alert(err)
          this.isLoading = false
        })
    },

    closeModal() {
      this.clearInput()
      this.isLoading = false
      this.toggleModalStatus()
    },

    clearInput() {
      this.$refs.registerPlayer.reset()
    },

    isInvalidForm() {
      if (isIncompleteRegistrationForm(this.email, this.name)) {
        window.alert('Email or Name field is required!')
        return true
      }

      if (!isValidEmail(this.email)) {
        window.alert('Invalid email!')
        return true
      }

      return false
    }
  }
}
</script>
