<template>
  <div class="btns">
    <button class="sls_btn btn_grey" @click="close()" v-if="show_close">
      <slot name="close">Отмена</slot>
    </button>
    <slot name="other_btns"></slot>
    <button
      class="sls_btn btn_blue"
      @click="save()"
      v-if="show_save"
      :disabled="disabledSave"
    >
      <slot name="save">Сохранить</slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    show_close: {
      type: Boolean,
      required: false,
      default() {
        return true;
      },
    },
    show_save: {
      type: Boolean,
      required: false,
      default() {
        return true;
      },
    },
    disabledSave: {
      type: Boolean,
      required: false,
      default() {
        return false;
      },
    },
  },
  emits: { close: null, save: null },
  methods: {
    close() {
      this.$emit("close");
    },
    save() {
      this.$emit("save");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/app.scss";
.btns {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
