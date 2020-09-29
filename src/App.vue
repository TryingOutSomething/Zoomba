<template>
  <v-app>
    <v-main class="content-body">
      <transition mode="out-in">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "styles/index";
</style>
