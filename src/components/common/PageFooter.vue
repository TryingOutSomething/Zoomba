<template>
  <v-footer class="font-weight-light" v-bind="$attrs">
    <v-container class="px-12">
      <slot name="contact"/>

      <v-row align="center" justify="space-between">
        <span class="footer">
          Advance Software Engineering 20/21 TS3 TestyTest
        </span>

        <slot name="socials"/>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>
