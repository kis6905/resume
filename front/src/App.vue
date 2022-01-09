<template>
  <v-app>
    <v-main>
      <v-row
        justify="center"
        class="mt-3"
      >
        <v-col
          cols="3"
          class="ma-2 d-flex justify-center"
        >
          <v-btn color="primary" @click="clickPageButton('/home')">Home</v-btn>
        </v-col>
        <v-col
          cols="3"
          class="ma-2 d-flex justify-center"
        >
          <v-btn color="primary" @click="clickPageButton('/about')">About</v-btn>
        </v-col>
      </v-row>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// import { useRoute } from "vuex"

function clickPageButton(path: String) {
  console.log(`move to ${path}`)
}

</script>
