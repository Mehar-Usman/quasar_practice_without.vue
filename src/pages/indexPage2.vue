<template>
  <q-page>
    <div class="bg-image-container"></div>
    <div class="content">
      <p>This is an example of a page with a background image.</p>
    </div>
  </q-page>
  <h1>Hello, World!</h1>

</template>


<script>
export default {};
</script>

<style scoped>
.bg-image-container {
  width: 100%;
  height: 100px;
  background-image: url("coop-background-img.cb91b6a4.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #fff;
  text-align: center;
}
</style>
