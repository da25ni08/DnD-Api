<template lang="">
  <div>
    Classes
    <nav>
      <div v-for="(clase) in clases">
        
      </div>
    </nav>
    <Class>

    </Class>
  </div>
</template>
<script setup>
import Class from "../components/Class.vue";
import {fetchTo}  from "../scripts/utils.js";
let datos =  await fetchTo("classes");
console.log(datos);
</script>
<style lang="">
  
</style>