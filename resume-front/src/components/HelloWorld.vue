<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ name }}</div>
    <div>{{ nameWithPrefix }}</div>
    <div>
      <input type="text" v-model="name" />
    </div>
    <div>
      <button @click="handleClickBtn">Click me</button>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup: (props) => {
    console.log(`setup ${props.msg}`)
    const name = ref('leaf')
    const nameWithPrefix = computed(() => `prefix_${name.value}`)
    watch(name, (oldVal, newVal) => {
      console.log(`oldVal: ${oldVal}, newVal: ${newVal}`)
    })
    const handleClickBtn = () => {
      alert(`버튼 클릭! ${name.value}`)
    }

    return {
      name,
      nameWithPrefix,
      handleClickBtn
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
