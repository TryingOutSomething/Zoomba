<template>
  <base-modal>
    <v-card-title>
      Register Patient

      <v-spacer/>

      <v-icon @click="closeModal">mdi-close</v-icon>
    </v-card-title>

    <v-form ref="registerParticipant">
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
import { mapMutations } from 'vuex'
import { inputValidators } from '@/mixins/validators'
import { isIncompleteRegistrationForm, isValidEmail } from '@/utils/validation'
import BaseModal from '@/components/dashboard/main/core/BaseModal'

export default {
  name: 'AddPatient',
  components: { BaseModal },
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
    ...mapMutations('app', ['toggleModalStatus']),

    registerPatient() {
      // Validation before submitting user input to backend
      // if (this.isInvalidForm()) {
      //   return
      // }

      // try {
      //   this.isLoading = true
      //
      //   await createPatient(this.email, this.name)
      //
      //   window.alert('User created successfully!')
      //   this.closeModal()
      // } catch (err) {
      //   this.isLoading = false
      //   window.alert(err)
      // }

      console.log('add patient')
    },

    closeModal() {
      this.clearInput()
      this.isLoading = false
      this.toggleModalStatus()
    },

    clearInput() {
      this.$refs.registerParticipant.reset()
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
