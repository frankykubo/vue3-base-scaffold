<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="flex flex-col items-center">
    <Burger
      class="burger"
    />
    <div class="my-2 font-bold">This burger menu icon is SVG component.</div>
    <Suspense>
      <router-view />
    </Suspense>
  </div>
</template>

<script setup>
import Burger from '@/assets/graphics/icons/burger_menu.svg';

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.burger {
  height: 50px;
  widows: auto;
  fill: black;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
