<template>
  <v-dialog v-model="dialog" max-width="500" persistent>
    <v-card>
      <slot/>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Modal',

  props: {
    dimensions: {
      type: Object
    }
  },

  computed: {
    ...mapState('app', ['modalIsOpen']),

    dialog: {
      get() {
        return this.modalIsOpen
      },

      set() {
        this.toggleModalStatus()
      }
    },

    getWidth() {
      // do something with the boundaries
      return this.dimensions.width
    }
  },

  methods: {
    ...mapMutations('app', ['toggleModalStatus'])
  }
}
</script>

<style scoped>

</style>
