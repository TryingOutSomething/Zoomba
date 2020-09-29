<template>
  <page-footer absolute color="white">
    <template v-slot:contact>
      <v-row>
        <v-col class="px-0">
          <v-row class="px-3 pb-5" align="center" justify="space-between">
            <div>
              <span class="contact-us font-weight-medium">
                Contact Us
              </span>

              <span class="pt-2 ml-1 contact-email font-weight-light">
                at ahpeiq@gmail.com
              </span>
            </div>
            <sns-icons/>
          </v-row>

          <v-divider/>
        </v-col>
      </v-row>
    </template>
  </page-footer>
</template>

<script>
import PageFooter from '@/components/common/PageFooter'
import SnsIcons from '@/components/common/SnsIcons'

export default {
  name: 'ContactUsBar',
  components: {
    SnsIcons,
    PageFooter
  }
}
</script>

<style scoped>

</style>
