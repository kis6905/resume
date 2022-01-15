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
          <v-btn color="primary" @click="clickPageButton('Home')">Home</v-btn>
        </v-col>
        <v-col
          cols="3"
          class="ma-2 d-flex justify-center"
        >
          <v-btn color="primary" @click="clickPageButton('About')">About</v-btn>
        </v-col>
      </v-row>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// import { useRoute } from "vuex"
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

function clickPageButton(routeName: string) {
  console.log(`move to ${routeName}`)
  router.push({ name: routeName })
}

</script>
