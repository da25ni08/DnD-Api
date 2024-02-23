<template lang="">
  <div class="div-general">
    <div class="overflow">
      <div v-for="(result, index) in results" class="category-div" @click="$emit('changeCategory', index)">{{ result.name }}</div>
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

}

.overflow {
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow-x: scroll;
  flex-wrap: nowrap;
  height: 20dvh;
}
.category-div {
  width: 200px;
}
</style>