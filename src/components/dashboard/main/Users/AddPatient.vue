<template>
  <!--    <v-col sm="6" md="5" lg="5" xl="5" class="mt-7 pb-0">-->
  <!--      <div>-->
  <!--        <h3 class="pb-4 font-weight-medium content-body-header">-->
  <!--          Register Patient-->
  <!--        </h3>-->

  <!--        <v-text-field label="Patient Email" outlined dense/>-->
  <!--        <v-text-field label="Patient Name" outlined dense/>-->
  <!--      </div>-->

  <!--      <v-btn-->
  <!--        class="mb-6 px-10 py-5"-->
  <!--        depressed-->
  <!--        :color="landingPageButtonColour"-->
  <!--      >-->
  <!--        <span class="add-patient-button text-capitalize">Add Patient</span>-->
  <!--      </v-btn>-->
  <!--    </v-col>-->

  <v-dialog v-model="dialog" persistent max-width="500">
    <v-card>
      <v-card-title>
        Register Patient

        <v-spacer/>

        <v-icon @click="closeModal">mdi-close</v-icon>
      </v-card-title>

      <v-col class="px-6">
        <v-text-field label="Patient Email"/>
        <v-text-field label="Patient Name"/>
      </v-col>

      <v-card-actions class="pr-4 pb-7 pt-0">
        <v-spacer/>

        <v-btn
          text
        >
          Add Patient
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AddPatient',

  props: {
    value: {
      type: Boolean
    }
  },

  data () {
    return {}
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
    closeModal () {
      this.dialog = false
    }
  }
}
</script>
