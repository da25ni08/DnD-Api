<template lang="">
  <div class="div-general">
    <div class="overflow">
      <button v-for="(result, index) in results" class="category-div" @click="$emit('changeCategory', index)">{{ result.name }}</button>
    </div>
    
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue'
import { storeToRefs } from 'pinia';

const emit = defineEmits(['changeCategory'])


let resultados = ref([])

let data = useCounterStore()

let { count, next, previous, results } = storeToRefs(data)

</script>
<style scoped>
.div-general {
  width: 100%;
  top: 0px;
  width: 200dvw;
}

.overflow {
  overflow-x: scroll;
  display: flex;
  flex-wrap: nowrap;

  height: 20dvh;
}

.category-div {
  min-width: 100px;
  height: 80%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 2px white solid;
  text-align: center;
  background-color: rgb(185, 156, 41);
}
</style>