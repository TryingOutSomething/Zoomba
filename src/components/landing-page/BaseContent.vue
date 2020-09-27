<template>
  <v-container id="content" class="pt-12 content-body" fluid>
    <v-row justify="center">
      <v-col>
        <content-title/>
        <content-description/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContentDescription from '@/components/landing-page/Body/ContentDescription'
import ContentTitle from '@/components/landing-page/Body/ContentTitle'

export default {
  name: 'BaseContent',
  components: {
    ContentTitle,
    ContentDescription
  }
}
</script>
