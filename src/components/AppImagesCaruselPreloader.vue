<template>
  <div
    class="wrapper_preloader"
    :class="{ aspect_square: square, aspect_video: !square }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="cvg_class"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19 2H5a3.009 3.009 0 0 0-3 3v8.86l3.88-3.88a3.075 3.075 0 0 1 4.24 0l2.871 2.887l.888-.888a3.008 3.008 0 0 1 4.242 0L22 15.86V5a3.009 3.009 0 0 0-3-3z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M10.12 9.98a3.075 3.075 0 0 0-4.24 0L2 13.86V19a3.009 3.009 0 0 0 3 3h14a3 3 0 0 0 2.16-.92L10.12 9.98z"
      />
      <path
        fill="currentColor"
        d="m22 15.858l-3.879-3.879a3.008 3.008 0 0 0-4.242 0l-.888.888l8.165 8.209c.542-.555.845-1.3.844-2.076v-3.142z"
        opacity=".25"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: { square: Boolean, default: () => true },
};
</script>

<style lang="scss" scoped>
.cvg_class {
  width: 33.33%;
  height: 33.33%;
}
.aspect_square {
  aspect-ratio: 1 / 1;
}
.aspect_video {
  aspect-ratio: 16 / 9;
}
.wrapper_preloader {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(156 163 175 / 0.3);
  color: rgb(156 163 175);
  border-radius: 12px;
}
</style>
