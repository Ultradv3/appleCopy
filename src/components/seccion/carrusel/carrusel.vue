<template>
  <div class="text-title text-start pl-20 pt-20 text-6xl font-semibold text-gray-800 w-full">
    <h1>Descubre el iPad.</h1>
  </div>
  <div class="carousel">
    <div class="carousel-inner">
      <div class="carousel-item">
        <ul class="carrusel">
          <li
            v-for="(slide, index) in carruselData"
            :key="index"
            class="caos"
            :style="{ transform: `translateX(-${currentSlide * 40}%)` }"
          >
            <div class="slide">
              <div class="slide-content">
                <h3 class="text-lg font-semibold p-3">{{ slide.title }}</h3>
                <h4 class="text-2xl font-semibold p-2" v-html="slide.descripcion" />
              </div>
              <div class="icons-more">
                <span class="material-icons"> add_circle</span>
              </div>
              <img :src="slide.img" alt="Slide Image" class="slide-image" />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Botones de navegación -->
    <div class="carousel-control prev">
      <span class="material-icons" @click="prevSlide">arrow_circle_left</span>
    </div>
    <div class="carousel-control next">
      <span class="material-icons" @click="nextSlide">arrow_circle_right</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import carruselData from './data.js'

const currentSlide = ref(0)
const totalSlides = carruselData.length

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 830px;
  overflow: hidden;
  display: flex;
  margin: 0 auto;
  margin-right: 40px;
  margin-bottom: 100px;
  padding: 10px;
}

.carrusel {
  display: flex;
  list-style: none;
  margin: 0;
  gap: 25px;
  padding: 0;
  flex-direction: row;
  align-items: center;
}

li {
  transition: transform 0.5s ease;
}

.icons-more {
  position: absolute;
  top: 90%;
  left: 85%;
  width: 30px;
  height: 30px;
  background-color: #6d6d6e;
  border-radius: 50%;
  color: #c8c8c9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: xx-large;
  padding: 5px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #e9e9e9;
  }
}

.carousel-inner {
  padding-top: 50px;
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
  margin-right: 40px;
  margin-left: 40px;
  padding-bottom: 40px;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}

.slide {
  width: 350px;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  transition: transform 0.3s;
}

.slide:hover {
  transform: scale(1.05);
}

.slide-content {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  color: white;
}

.slide h3,
.slide h4 {
  margin: 0;
}

.slide-image {
  width: 100%;
  height: auto;
  transition: transform 0.3s;
}

.slide:hover .slide-image {
  cursor: pointer;
}

.carousel-control {
  position: absolute;
  top: 98%;
  transform: translateY(-50%);
  border: none;

  color: #e2e2e5;
  transition: color 0.5s ease;
}

.carousel-control:hover {
  color: #c6c6c6;
  cursor: pointer;
}
.prev {
  left: 80%;
}

.next {
  right: 13%;
}
.icons-more span:hover {
  cursor: pointer;
}

span {
  color: #c8c8c9;
  font-size: 40px;
}
</style>
