<template lang="">
  <div class="div-vista">
  <CategoryNav @changeCategory= "changeCategory" id="categoryNav"></CategoryNav>
  <div class="div-contenido">
    <h1 id="titulo">{{claseVisible.name}}</h1>
    
    <p id="descripcion" v-html="descripcion"></p>
    
    <h2>{{claseVisible.feature}}</h2>
    <p>{{claseVisible.feature_desc}}</p>
    
    <h2>Skill Proficiencies</h2>
    <p>{{claseVisible.skill_proficiencies}}</p>

    <h2 v-if="claseVisible.languages != null">Languages</h2>
    <p>{{claseVisible.languages}}</p>
    
    

    <h2 v-if="claseVisible.tool_proficiencies != null">Tool Proficiencies</h2>
    <p>{{claseVisible.tool_proficiencies}}</p>

    
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

await store.fetchTo("backgrounds");

let { count, next, previous, results } = storeToRefs(store);

console.log(results);
claseVisible.value = results.value[0];
descripcion.value = getRaceDesc(claseVisible.value.desc);
console.log(claseVisible);
// claseVisible.value.languages = getAtribute(claseVisible.value.languages)
// claseVisible.value.size = getAtribute(claseVisible.value.size)
// claseVisible.value.speed_desc = getAtribute(claseVisible.value.speed_desc)
// claseVisible.value.age = getAtribute(claseVisible.value.age)
// claseVisible.value.alignment = getAtribute(claseVisible.value.alignment)

// claseVisible.value.traits = getAtributeWithTitles(claseVisible.value.traits)

function changeCategory(index) {
claseVisible.value = results.value[index];
descripcion.value = getRaceDesc(claseVisible.value.desc);
// claseVisible.value.languages = getAtribute(claseVisible.value.languages)
// claseVisible.value.size = getAtribute(claseVisible.value.size)
// claseVisible.value.speed_desc = getAtribute(claseVisible.value.speed_desc)
// claseVisible.value.age = getAtribute(claseVisible.value.age)
// claseVisible.value.alignment = getAtribute(claseVisible.value.alignment)

// claseVisible.value.traits = getAtributeWithTitles(claseVisible.value.traits)
console.log(claseVisible);
}
</script>
<style>
#descripcion * {
  margin-bottom: 20px;
}
</style>