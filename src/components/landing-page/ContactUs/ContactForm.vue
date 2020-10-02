<template>
  <v-card
    :color="landingPageBackgroundColour"
    class="pt-5"
    elevation="0"
    width="400"
  >
    <h1 class="mb-10 contact-us-title font-weight-regular">Contact Us</h1>

    <v-form ref="feedbackForm">
      <v-col class="pl-0 pb-0" sm="10">
        <v-text-field
          v-model="name"
          :background-color="landingPageTextColour"
          :rules="[validation.required]"
          dense
          label="Name"
          outlined
        />

        <v-text-field
          v-model="email"
          :background-color="landingPageTextColour"
          :rules="[validation.required, validation.email]"
          dense
          label="Email Address"
          outlined
        />
      </v-col>

      <v-textarea
        v-model="description"
        :background-color="landingPageTextColour"
        :rules="[validation.required]"
        dense
        label="Description"
        no-resize
        outlined
      />
    </v-form>

    <v-btn
      :color="landingPageSubmitButtonColour"
      class="px-11 py-6 text-capitalize submit-button-text"
      @click="submitFeedbackForm"
    >
      Submit
    </v-btn>
  </v-card>
</template>

<script>
import { palette } from '@/mixins/interface'
import { inputValidators } from '@/mixins/validators'
import { isIncompleteFeedbackForm, isValidEmail } from '@/utils/validation'

export default {
  name: 'ContactForm',
  mixins: [inputValidators, palette],

  data () {
    return {
      name: '',
      email: '',
      description: ''
    }
  },

  methods: {
    submitFeedbackForm () {
      if (this.isInvalidForm()) {
        return
      }

      window.alert('Feedback Submitted!')
      this.$refs.feedbackForm.reset()
    },

    isInvalidForm () {
      const userInput = {
        name: this.name,
        email: this.email,
        description: this.description
      }

      if (isIncompleteFeedbackForm(userInput)) {
        window.alert('Name, Email Address or Description is empty!')
        return true
      }

      if (!isValidEmail(this.email)) {
        window.alert('Invalid Email Address!')
        return true
      }

      return false
    }
  }
}
</script>

<style scoped>

</style>
