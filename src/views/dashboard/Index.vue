<template>

  <div
      class="d-flex flex-row"
  >
    <v-card class="ma-2 pa-2" width="400" elevation="0">
      <template v-slot:title>
        This is a title
      </template>

      <template v-slot:subtitle>
        This is a subtitle
      </template>

      <template v-slot:text>
        This is content
      </template>
    </v-card>
    <v-card class="ma-2 pa-2" width="400" elevation="0">
      <template v-slot:title>
        This is a title
      </template>

      <template v-slot:subtitle>
        This is a subtitle
      </template>

      <template v-slot:text>
        This is content
      </template>
    </v-card>
  </div>

  <div
      class="d-flex flex-row"
  >
    <v-card class="ma-2 pa-2" width="400" elevation="0">
      <template v-slot:title>
        This is a title
      </template>

      <template v-slot:subtitle>
        This is a subtitle
      </template>

      <template v-slot:text>
        This is content
      </template>
    </v-card>
  </div>

</template>

<script>
export default {
  name: "DasboardIndex"
}
</script>

<style scoped>

</style>