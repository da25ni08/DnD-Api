<template lang="">
  <div class="div-general">
    
    <h1>{{clase.name}}</h1>
    <div class="spellcasting" v-if="clase.spellcasting_ability != ''"></div>

    <h2>Proficiencies</h2>
    <p>Skills: {{clase.prof_skills}}</p>
    <p>Tools: {{clase.prof_tools}}</p>
    <p>Weapons: {{clase.prof_weapons}}</p>
    <p>Armor: {{clase.prof_armor}}</p>
    <p>Saving Throws: {{clase.prof_saving_throws}}</p>

    <h2>Equipment</h2>
    <p>{{clase.equipment}}</p>

    <h2>Class Features</h2>
    <div v-html="descripcion"></div>
  </div>
</template>
<script setup>
import { getDesc } from '../scripts/utils.js'
import { ref, toRefs } from 'vue'

const props = defineProps([
  'claseVisible'
])
let {clase}= toRefs(props);
clase = props.claseVisible;
console.log(clase);
let descripcion = ref("")
descripcion.value = getDesc(clase.desc);
console.log(descripcion);
</script>
<style scoped>
  .div-general {
    
  }
</style>