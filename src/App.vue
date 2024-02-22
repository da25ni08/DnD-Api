<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="nav-categorias">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/classes">Classes</RouterLink>
        <RouterLink to="/races">Races</RouterLink>
        <RouterLink to="/backgrounds">Backgrounds</RouterLink>
        <RouterLink to="/spells">Spells</RouterLink>
      </nav>
  </header>

  <RouterView class="vistaRouter" />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  width: 50vw;
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
 width: 100%;
}

.nav-categorias a.router-link-exact-active {
  color: var(--color-text);
}

.nav-categorias a.router-link-exact-active:hover {
  background-color: transparent;
}

.nav-categorias a {
  display: inline-block;
  padding: 0 1rem;
  margin: 20px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    
  }

  .logo {
    margin: 0 2rem 0 0;
  }

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
