<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div class="carousel-item">
        <ul class="carrusel">
          <li v-for="(slide, index) in carruselData" :key="index" class="caos" :style="{ transform: `translateX(-${currentSlide * 40}%)` }">
            <div class="slide">
              <div class="slide-content">
                <h3 class="text-lg font-semibold p-3">{{ slide.title }}</h3>
                <h4 class="text-2xl font-semibold p-2">{{ slide.descripcion }}</h4>

              </div>
              <div>

              </div>
              <img :src="slide.img" alt="Slide Image" class="slide-image" />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Botones de navegación -->
    <button class="carousel-control prev" @click="prevSlide">‹</button>
    <button class="carousel-control next" @click="nextSlide">›</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import carruselData from './data.js';

const currentSlide = ref(0);
const totalSlides = carruselData.length;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  margin: 0 auto;
  margin-right: 40px;
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
  transition: transform 0.5s;
}

.carousel-inner {
  padding-top: 200px;
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
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  cursor: pointer;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
