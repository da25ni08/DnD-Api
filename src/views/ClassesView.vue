<script setup>
import { useCounterStore } from "@/stores/counter";
import { ref, defineAsyncComponent } from 'vue'
import Class from "../components/Class.vue";
import CategoryNav from "@/components/CategoryNav.vue";
import { fetchTo } from "../scripts/utils.js";
import { storeToRefs } from "pinia";

let clases = ref([]);


let datos = await fetchTo("classes");
console.log(datos);

clases.value = datos.results;
console.log(clases.value[0]);


let store = useCounterStore();

await store.fetchTo("classes");

let { count, next, previous, results} = storeToRefs(store);

console.log(results.value);

let claseVisible = ref(results.value[0]);

function changeCategory(index) {
 claseVisible.value = results.value[index];
 console.log(claseVisible);
}

</script>
<template lang="">
  <div class="div-vista">
    <CategoryNav @changeCategory= "changeCategory"></CategoryNav>
    <Class :claseVisible></Class>
  </div>

</template>
<style scoped>

</style>