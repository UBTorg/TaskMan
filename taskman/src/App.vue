<template>
  <div class="container">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
  background-color: #fff;
  position: relative;
}
</style>
