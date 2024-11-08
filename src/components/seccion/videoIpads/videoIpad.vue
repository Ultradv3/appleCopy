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
  <!--comentario-->
  <section>
    <div class="Video-container bg-slate-500">
      <video src="/public/video/xlarge_2x.mp4" autoplay muted loop></video>
    </div>
  </section>
</template>

<style scoped>
.description {
  margin-right: 10%;
  margin-left: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 100px;
  height: 250px;
}
.Video-container {
  overflow: hidden;
  border-radius: 40px;
  height: 80vh;
  min-height: 680px;
  max-width: 1920px;
  max-height: 1260px;
  margin: 0 auto;
  width: 87.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

video {
  object-fit: cover;
  position: relative;
  left: 0;
}
</style>
