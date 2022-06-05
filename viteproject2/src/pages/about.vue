
<template>
  <div>
      about
    <h1 @click="add">{{ count }}</h1>

     <h1 @click="add">{{ obj.color1 }}</h1>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
let count = ref(1)
let color = ref('red')

let obj = reactive({
    color1: '111'
})

const arr = ['red', 'blue', '#f99', '#f00', '#f90', 'green', 'yellow', '#963', '#987', '#678']
function add() {
  count.value++
  const index = Math.floor(Math.random() * 10)
  obj.color1 = arr[index]
  color.value = arr[index]
}
</script>

<style scoped>
h1 {
  color:v-bind(color);
  cursor: pointer;
}
</style>>