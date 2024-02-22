<template lang="">
  <div>
    <Suspense>
      <template #default>
        <div>
          <nav>
            <div v-for="(clase) in clases"></div>
          </nav>
          <Class></Class>
        </div>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
      
    </Suspense>

    
    

    
  </div>
</template>
<script setup>
import { useCounterStore } from "@/stores/counter";
import Class from "../components/Class.vue";
import { fetchTo } from "../scripts/utils.js";
let datos = await fetchTo("classes");
console.log(datos);
let store = useCounterStore();
</script>
<style lang="">
  
</style>