<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <v-card>
      <v-card-title>
        Register Patient

        <v-spacer/>

        <v-icon @click="closeModal">mdi-close</v-icon>
      </v-card-title>

      <v-form ref="registerParticipant">
        <v-col class="px-6">
          <v-text-field
            label="Patient Email"
            :rules="[validation.required, validation.email]"
            v-model="email"
          />

          <v-text-field
            label="Patient Name"
            :rules="[validation.required]"
            v-model="name"
            @keydown.enter="registerPatient"
          />
        </v-col>

        <v-card-actions class="pr-4 pb-7 pt-0">
          <v-spacer/>

          <v-btn
            text
            :loading="isLoading"
            @click="registerPatient"
          >
            Add Patient
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { inputValidators } from '@/mixins/validators'
import { isIncompleteRegistrationForm } from '@/utils/validation'
import { createPatient } from '@/services/firebase'

export default {
  name: 'AddPatient',
  mixins: [inputValidators],

  props: {
    value: {
      type: Boolean
    }
  },

  data () {
    return {
      email: '',
      name: '',
      isLoading: false
    }
  },

  computed: {
    dialog: {
      get () {
        return this.value
      },

      set (value) {
        this.$emit('input', value)
      }
    }
  },

  methods: {
    async registerPatient () {
      if (this.isInvalidForm()) {
        return
      }

      try {
        this.isLoading = true

        await createPatient(this.email, this.name)

        window.alert('User created successfully!')
        this.closeModal()
      } catch (err) {
        this.isLoading = false
        window.alert(err)
      }
    },

    closeModal () {
      this.clearInput()

      this.dialog = false
    },

    clearInput () {
      this.$refs.registerParticipant.reset()
    },

    isInvalidForm () {
      if (isIncompleteRegistrationForm(this.email, this.name)) {
        window.alert('Email or Name field is required!')
        return true
      }

      return false
    }
  }
}
</script>
