<template>
  <nav class="w-auto bg-gris-1 p-4 overflow-hidden">
    <div class="w-auto">
      <ul class="navbar">
        <li class="nav-item text-center" v-for="item in dataIcons" :key="item.index">
          <img :src="item.iconLink" alt="icon" class="mb-2" />
          {{ item.text }}
        </li>
      </ul>
    </div>
  </nav>
  <div class="w-full bg-gray-100 h-9 text-center text-sm p-1 font-light text-gray-900">
    MLS Season Pass. Gratis con tu subscripción a Apple TV+. O un 80% menos en el plan de temporada.
    Se renovará al precio completo en 2025.
    <span class="text-blue-500 text- cursor-pointer"> Más información ></span>
  </div>
</template>
<script setup>
import dataIcons from './dataNav2.js'

dataIcons
</script>
<style scoped>
.navbar {
  margin-right: 25%;
  margin-left: 25%;
  height: 75px;
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-item {
  font-size: 10px;
  font-weight: 100;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 5px;
}
</style>
