<template lang="">
    <div class="div-vista">
    <CategoryNav @changeCategory= "changeCategory" id="categoryNav"></CategoryNav>
    <div class="div-contenido">
      <h1 id="titulo">{{claseVisible.name}}</h1>
      
      <p v-html="descripcion"></p>
      
      <h2>Age</h2>
      <p>{{claseVisible.age}}</p>

      <h2>Size</h2>
      <p>{{claseVisible.size}}</p>

      <h2>Speed</h2>
      <p>{{claseVisible.speed_desc}}</p>

      <h2>Alignment</h2>
      <p>{{claseVisible.alignment}}</p>

      <h2>Languages</h2>
      <p>{{claseVisible.languages}}</p>

      <h2>Traits</h2>
      <p v-html="claseVisible.traits"></p>

      
    </div>
  </div>
</template>
<script setup>
import { useCounterStore } from "@/stores/counter";
import { ref } from 'vue'
import { getRaceDesc, getAtribute, getAtributeWithTitles } from "../scripts/utils.js";
import CategoryNav from "@/components/CategoryNav.vue";
import { storeToRefs } from "pinia";

let claseVisible = ref([])
let descripcion = ref("")
let tabla = ref("")

let store = useCounterStore();

await store.fetchTo("races");

let { count, next, previous, results } = storeToRefs(store);

console.log(results);
claseVisible.value = results.value[0];
descripcion.value = getRaceDesc(claseVisible.value.desc);
claseVisible.value.languages = getAtribute(claseVisible.value.languages)
claseVisible.value.size = getAtribute(claseVisible.value.size)
claseVisible.value.speed_desc = getAtribute(claseVisible.value.speed_desc)
claseVisible.value.age = getAtribute(claseVisible.value.age)
claseVisible.value.alignment = getAtribute(claseVisible.value.alignment)

claseVisible.value.traits = getAtributeWithTitles(claseVisible.value.traits)

function changeCategory(index) {
  claseVisible.value = results.value[index];
  descripcion.value = getRaceDesc(claseVisible.value.desc);
  claseVisible.value.languages = getAtribute(claseVisible.value.languages)
  claseVisible.value.size = getAtribute(claseVisible.value.size)
  claseVisible.value.speed_desc = getAtribute(claseVisible.value.speed_desc)
  claseVisible.value.age = getAtribute(claseVisible.value.age)
  claseVisible.value.alignment = getAtribute(claseVisible.value.alignment)
  
  claseVisible.value.traits = getAtributeWithTitles(claseVisible.value.traits)
  console.log(claseVisible);
}
</script>
<style lang="">
  
</style>