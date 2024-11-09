<template>
  <section>
    <header>
      <div class="description">
        <h1 class="text-7xl font-semibold">iPad</h1>
        <p class="text-2xl font-bold">
          Una invitación a tocar, <br />
          dibujar, escribir y crear.
        </p>
      </div>
    </header>
  </section>
  <section>
    <div ref="videoContainer" class="video-container">
      <video src="/public/video/xlarge_2x.mp4" autoplay muted loop></video>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const videoContainer = ref(null)

    const handleScroll = () => {
      // Obtenemos la cantidad de desplazamiento actual
      const scrollTop = window.scrollY
      // Definimos desde dónde comienza el efecto y hasta dónde alcanza el máximo
      const startScroll = 300 // Ajusta este valor para definir el inicio
      const maxScroll = 800 // Ajusta este valor para definir el máximo

      // Solo aplicamos el efecto si el desplazamiento supera el valor inicial
      if (scrollTop > startScroll) {
        // Calculamos el porcentaje de desplazamiento desde el punto de inicio
        const scrollPercentage = Math.min((scrollTop - startScroll) / (maxScroll - startScroll), 1)

        // Calculamos el `width` y `border-radius` en función del desplazamiento
        const newWidth = 100 - scrollPercentage * 20 // Rango entre 100% y 95%
        const newBorderRadius = scrollPercentage * 40 // Rango entre 0px y 40px

        // Aplicamos los estilos
        videoContainer.value.style.width = `${newWidth}%`
        videoContainer.value.style.borderRadius = `${newBorderRadius}px`
      } else {
        // Restablece los estilos cuando el scroll está por debajo de `startScroll`
        videoContainer.value.style.width = '100%'
        videoContainer.value.style.borderRadius = '0px'
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return { videoContainer }
  },
}
</script>

<style scoped>
.description {
  margin: 0 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 100px;
  height: 250px;
}

.video-container {
  overflow: hidden;
  height: 80vh;
  min-height: 680px;
  max-width: 100%;
  max-height: 1260px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition:
    width 0.8s ease,
    border-radius 0.8s ease;
}

video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
