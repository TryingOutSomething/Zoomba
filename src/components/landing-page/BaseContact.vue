<template>
  <v-container id="contact" class="pb-8 hero-content" fluid>
    <v-row justify="space-around">
      <contact-form/>
      <office-location/>
    </v-row>
  </v-container>
</template>

<script>
import ContactForm from '@/components/landing-page/ContactUs/ContactForm'
import OfficeLocation from '@/components/landing-page/ContactUs/OfficeLocation'

export default {
  name: 'BaseContact',
  components: {
    OfficeLocation,
    ContactForm
  }
}
</script>

<style scoped>

</style>
