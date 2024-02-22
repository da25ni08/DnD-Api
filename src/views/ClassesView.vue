<template lang="">
  <div>
    <nav>
      <div v-for="(clase) in clases">
        {{ clase.name }}
      </div>
    </nav>
    <Class></Class>
  </div>
</template>
<script setup>
  import { Class } from 'vue'
</script>
<style lang="">
  
</style>