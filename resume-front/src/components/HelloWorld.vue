<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="name" />
    <div>
      {{ displayName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed, watch, onMounted, onUpdated } from 'vue';

defineProps({ msg: String })

onMounted(() => {
  console.log('mounted!')
})
onUpdated(() => {
  console.log('updated!')
})

const name = ref('leaf')

const displayName = computed(() => name.value + '님')
watch(
  () => name.value,
  (newVal) => console.log('watch... ', name.value, newVal)
)

</script>

<style scoped lang="scss">
</style>
