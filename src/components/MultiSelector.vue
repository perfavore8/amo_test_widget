<template>
  <div class="multi_selector">
    <div
      class="item"
      :class="{ selected: selected_options[idx], disabled: disabled }"
      v-for="(option, idx) in options_props"
      :key="option.value"
      @click="select(idx)"
    >
      {{ option.name }}
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
export default {
  name: "MultiSelector",
  props: {
    options_props: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    selected_options: {
      type: Array,
      required: true,
      default() {
        return [true];
      },
    },
    disabled: {
      type: Boolean,
      required: false,
      default() {
        return false;
      },
    },
  },
  emits: {
    select: null,
  },
  setup(props, { emit }) {
    const options_value = ref([]);
    onMounted(() => (options_value.value = [...props.selected_options]));
    watch(
      () => props.selected_options,
      () => {
        options_value.value = [...props.selected_options];
      },
      { deep: true }
    );
    const select = (idx) => {
      if (!props.disabled) {
        if (idx == 0) options_value.value = [];
        if (options_value.value[0] == true) options_value.value[0] = false;
        options_value.value[idx] = !options_value.value[idx];
        if (!options_value.value.includes(true)) options_value.value[0] = true;
        emit("select", options_value.value);
      }
    };
    return {
      options_value,
      select,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/app.scss";
* {
  box-sizing: border-box;
}
.multi_selector {
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #ced4da;
  border-radius: 5px;
  .item {
    cursor: pointer;
    height: 32px;
    // width: 250px;
    padding: 6px 12px;
    transition: background-color 0.2s ease-out;
    @include font(400, 16px, 20px);
  }
  .item:first-child {
    border-radius: 4px 4px 0 0;
  }
  .item:last-child {
    border-radius: 0 0 4px 4px;
  }
  .item:hover {
    background-color: rgb(13 110 253 / 20%);
  }
  .disabled,
  .disabled:hover {
    background-color: #e9ecef !important;
    cursor: default !important;
  }
}
.selected {
  background-color: #b3d7ff;
}
.selected:hover {
  background-color: #b3d7ff !important;
}
</style>
