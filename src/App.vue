<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { fetchTo } from './scripts/utils';
import { useCounterStore } from './stores/counter';

let store = useCounterStore();
async function cambiarDatos(direccion) {
  
}


</script>

<template>
  <div class="div-general">
    <header>
      <nav class="nav-categorias">
        <RouterLink to="/" @click="cambiarDatos()">Home</RouterLink>
        <RouterLink to="/classes" @click="cambiarDatos('classes')">Classes</RouterLink>
        <RouterLink to="/races" @click="cambiarDatos('races')">Races</RouterLink>
        <RouterLink to="/backgrounds" @click="cambiarDatos('backgrounds')">Backgrounds</RouterLink>
      </nav>
  </header>
  <section class="contenido">
    <RouterView v-slot="{ Component }" >
    <template v-if="Component">
          <Suspense timeout="0">
            <!-- main content -->
            <component :is="Component" class="vistaRouter"></component>
  
            <!-- loading state -->
            <template #fallback>
              <div class="carga"><p>Loading...</p></div>
            </template>
          </Suspense>
    </template>
  </RouterView>
  </section>
  
  </div>
  
</template>

<style scoped>

.contenido {
  width: 70dvw;
  margin-left: 25dvw;
  padding-top: 30px;
}

.carga {
  width: 70dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.div-general {
  width: 20px;
}

header {
  position: fixed;
  top: 0px;
  left: 0px;
  line-height: 1.5;
  height: 100vh;
  width: 20vw;
  background-color: #D1C39E;
  z-index: 40;
  display: flex;
    place-items: center;
}

.nav-categorias {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vistaRouter {
  width: 50vw;
}

.nav-categorias a.router-link-exact-active {
  font-weight: bold;
}

.nav-categorias a.router-link-exact-active:hover {
  background-color: transparent;
}

.nav-categorias a {
  display: inline-block;
  padding: 0 1rem;
  margin: 20px;
  color: #17150F;
  width: 50%;
  text-align: center;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

@media (min-width: 1024px) {
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .nav-categorias {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
