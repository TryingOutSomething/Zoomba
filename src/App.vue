<template>
  <v-app>
    <main>
      <transition mode="out-in">
        <router-view/>
      </transition>
    </main>
  </v-app>
</template>

<style lang="scss">
@import "styles/index";
</style>
