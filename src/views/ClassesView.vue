<script setup>
import { useCounterStore } from "@/stores/counter";
import { ref} from 'vue'
import { getClassDesc, getTable } from "../scripts/utils.js";
import CategoryNav from "@/components/CategoryNav.vue";
import { storeToRefs } from "pinia";

let claseVisible = ref([])
let descripcion = ref("")
let tabla = ref("")

let store = useCounterStore();

await store.fetchTo("classes");

let { count, next, previous, results } = storeToRefs(store);

claseVisible.value = results.value[0];
descripcion.value = getClassDesc(claseVisible.value.desc);
tabla.value = getTable(claseVisible.value.table)

function changeCategory(index) {
  claseVisible.value = results.value[index];
  descripcion.value = getClassDesc(claseVisible.value.desc);
  tabla.value = getTable(claseVisible.value.table)
}

</script>
<template lang="">
  <div class="div-vista">
    <CategoryNav @changeCategory= "changeCategory" id="categoryNav"></CategoryNav>
    <div class="div-contenido">
      <h1 id="titulo">{{claseVisible.name}}</h1>
      <table v-html="tabla" class="tabla-atributos"></table>
      
      <div class="spellcasting" v-if="claseVisible.spellcasting_ability != ''"><h2>Spellcasting Ability</h2><p>{{claseVisible.spellcasting_ability}}</p></div>

      <h2>Proficiencies</h2>
      <br>
      <p>Skills: {{claseVisible.prof_skills}}</p>
      <p>Tools: {{claseVisible.prof_tools}}</p>
      <p>Weapons: {{claseVisible.prof_weapons}}</p>
      <p>Armor: {{claseVisible.prof_armor}}</p>
      <p>Saving Throws: {{claseVisible.prof_saving_throws}}</p>
      <br>
      <h2>Equipment</h2>
      <br>
      <p>{{claseVisible.equipment}}</p>
      <br>
      <h2>Class Features</h2>
      <br>
      <div v-html="descripcion"></div>
    </div>
  </div>

</template>
<style>
#categoryNav {
  width: 70dvw;
}

.div-vista {
  position: relative;
}

td,
table, th {
  border: 2px black solid;
  padding: 5px;
}

td {
  text-wrap: wrap;
}

th {
  font-weight: bold;
}

#titulo {
  font-size: 40px;
}

h1, h2, h3, h4 {
  font-weight: bold;
}

</style>