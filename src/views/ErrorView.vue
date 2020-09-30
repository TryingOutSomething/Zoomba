<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col>
        <h1 class=" text-uppercase text-center mb-5 big-af-size">error 404</h1>

        <h1 class="text-uppercase text-center mb-12">
          you think you've found a secret route but...
        </h1>

        <v-row justify="center">
          <v-img :src="src" alt="KONO DIO DA!!!!!" width="440" height="248" contain/>
        </v-row>

        <v-row class="mt-12" justify="center">
          <v-btn :color="buttonColour" @click="$router.back()" x-large>
            <span class="white-shit">Go back! Now!!!</span>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ErrorView',

  data () {
    return {
      src: 'https://i.kym-cdn.com/photos/images/newsfeed/000/754/539/566.gif',
      buttonColour: '#2962FF'
    }
  }
}
</script>

<style scoped>
.big-af-size {
  font-size: 10em !important;
}

.white-shit {
  color: white !important;
}
</style>
