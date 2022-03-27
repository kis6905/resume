<template>
  <v-container
    class="grey lighten-5 mb-6"
  >
    <v-card>
      <v-card-title class="white--text mt-2">
        <v-avatar size="56">
          <img
            alt="user"
            src="https://avatars.githubusercontent.com/u/20917534?v=4"
          >
        </v-avatar>
        <p class="ml-3">
          권일수(Leaf)
        </p>
      </v-card-title>

      <v-card-text>이름: Leaf</v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import api from '@/apis';
import Person from '@/types/person';

let res: Person = await api.person.get()
console.log(res)
console.log(api)

let updateRes: Person = await api.person.update({ name: '하하하' })
console.log('updateRes', updateRes)

</script>
