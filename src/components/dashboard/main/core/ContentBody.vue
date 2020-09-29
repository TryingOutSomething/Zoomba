<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col sm="8">
        <v-card elevation="0">
          <v-container class="px-5">
            <v-col class="px-0">
              <h1 class="content-body-header">{{ contentHeader }}</h1>

              <v-divider/>
            </v-col>

            <slot name="content"/>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContentBody',

  props: {
    contentHeader: {
      type: String,
      required: true,
      default: 'Content Header'
    }
  }
}
</script>

<style scoped>

</style>
