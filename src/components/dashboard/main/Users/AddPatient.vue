<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <v-card>
      <v-card-title>
        Register Patient

        <v-spacer/>

        <v-icon @click="closeModal">mdi-close</v-icon>
      </v-card-title>

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
        />
      </v-col>

      <v-card-actions class="pr-4 pb-7 pt-0">
        <v-spacer/>

        <v-btn
          text
          @click="registerPatient"
        >
          Add Patient
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { inputValidators } from '@/mixins/validators'
import { isIncompleteRegistrationForm } from '@/utils/validation'

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
      name: ''
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
    registerPatient () {
      this.closeModal()
    },

    closeModal () {
      this.clearInput()

      this.dialog = false
    },

    clearInput () {
      this.email = ''
      this.name = ''
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
