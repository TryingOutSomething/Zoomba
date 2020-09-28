<template>
  <v-app>
    <v-main>
      <transition mode="out-in">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "styles/index";
</style>
