<script setup>
import compareIpads from './dataIpads'
</script>

<template>
  <section class="comparar bg-gris-2">
    <div class="container-comparar">
      <div class="header-comparar">
        <h1>Conoce a la familia.</h1>
        <p class="cursor-pointer">Comparar todos los modelos ></p>
      </div>
      <div class="divisor"></div>
      <div class="ipad-comparacion">
        <ul v-for="(ipad, index) in compareIpads" :key="index" class="ipad-comparacion-item">
          <div class="header-ipad">
            <li class="imagen">
              <img :src="ipad.img" alt="" />
            </li>
            <!-- TITLE -->
            <li class="title title1">
              <h1>{{ ipad.title[0].title }}</h1>
            </li>
          </div>

          <li v-html="ipad.title[0].description" class="description" />
          <button class="bg-blue-700 text-white w-40 rounded-xl h-7 mb-2 mt-2">
            Más información
          </button>

          <!-- SIZE -->
          <li class="size title1">
            {{ ipad.size[0].title }}
          </li>
          <p v-html="ipad.size[0].description" class="description" />

          <!--- Chip --->
          <li class="detalles" v-for="(detalles, index) in ipad.detalles" :key="index">
            <img :src="detalles.img" :alt="detalles.text" />

            <p v-html="detalles.text" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.comparar {
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
}

.container-comparar {
  width: 80%;
}
.divisor {
  position: relative;
  top: 600px;
  z-index: 1;
  background-color: #d2d2d7;
  height: 0.5px;
  width: 100%;
}
.title1 {
  font-size: x-large;
  font-weight: 600;
}
.header-ipad {
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 370px;

  justify-content: center;
  align-items: center;

  .title h1 {
    margin-top: 10px;
  }
}
.imagen {
  transition: transform 0.5s ease; /* Added 'ease' for smooth transition */
}

.imagen:hover {
  cursor: pointer;
  transform: scale(1.03);
}

.description {
  width: 300px;
  height: 100px;
}
.description,
p {
  line-height: 2;
}

.ipad-comparacion {
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  text-align: center;
  gap: 118px;

  p {
    font-size: 12px;
  }
}
.ipad-comparacion-item {
  min-width: 80%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row-gap: 40px;
}

.detalles {
  display: flex;
  align-items: center;
  width: 100%;

  flex-direction: column;
}

.header-comparar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 200px;

  h1 {
    font-size: 56px;
    line-height: 1.0714285714;
    font-weight: 600;
    letter-spacing: -0.005em;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
  }

  p {
    font-size: 18px;
    color: rgb(0, 102, 204);
  }
}
</style>
