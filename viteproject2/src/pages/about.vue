
<template>
  <div id="id1">
      about
    <h1 @click="add">{{ count }}</h1>

     <h1 @click="add">{{ obj.color1 }}</h1>
     <h3></h3>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useFullscreen } from '@vueuse/core'
let count = ref(1)
let color = ref('red')

let obj = reactive({
    color1: '111'
})


let styleBind = ref('"hello"').value

console.log('styleBind', styleBind, useFullscreen)



const arr = ['red', 'blue', '#f99', '#f00', '#f90', 'green', 'yellow', '#963', '#987', '#678']
function add() {
  count.value++
  const index = Math.floor(Math.random() * 10)
  obj.color1 = arr[index]
  color.value = arr[index]

  useFullscreen(document.getElementById('id1'))
//   styleBind.value = '2222'
}
</script>

<style scoped>
h1 {
  color:v-bind(color);
  cursor: pointer;
  position: relative;
}

h1::after{
    position: absolute;
    top: -10px;
    content: v-bind(styleBind);;
   /* content: var( --main-bg-content); */
}


</style>>