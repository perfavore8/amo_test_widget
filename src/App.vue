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
#myVue {
  font-family: "Inter";
}
*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

*::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}

*::-webkit-scrollbar-track {
  // background: #ddd;
  border-radius: 20px;
}
</style>
