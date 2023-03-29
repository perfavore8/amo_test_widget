<template>
  <div id="myVue">
    <main-page />
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
  setup() {},
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
