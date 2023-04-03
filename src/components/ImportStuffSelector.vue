<template>
  <div class="v-select">
    <div
      class="title"
      :class="{ title_checked: show_options, disabled: disabled }"
      @click="open_close_options()"
      @focusout="handleFocusOut"
      ref="title"
      tabindex="0"
    >
      <p>{{ selected_option.name }}</p>
      <div
        class="arrow"
        v-if="!disabled"
        :class="{ rotate_arrow: show_options }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#757575"
            d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
          />
        </svg>
      </div>
    </div>
    <transition name="list">
      <div class="options" v-if="show_options" key="a1">
        <p
          v-for="option in options"
          :key="option.value"
          :class="{
            optgroup: option.value === 'optgroup',
            selected: option.value == selected_option.value,
          }"
          @click="select_option(option)"
        >
          <template v-if="option.optgroup">
            &nbsp;&nbsp;&nbsp;&nbsp;{{ option.name }}
          </template>
          <template v-else>{{ option.name }}</template>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  onMounted,
  ref,
  nextTick,
  watch,
  onUnmounted,
} from "@vue/runtime-core";
export default {
  props: {
    options_props: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
    selected_option: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    idx: {
      type: Number,
      required: false,
    },
  },

  emits: {
    select: null,
  },
  setup(props, context) {
    const options = ref([]);
    onMounted(() => {
      window.addEventListener("scroll", calcOptionsPosition);
      nextTick(() => {
        set_options();
      });
    });
    const set_options = () => {
      options.value = [];
      props.options_props?.forEach((item) => options.value.push(item));
    };
    watch(
      () => props.options_props,
      () => {
        set_options();
      },
      { deep: true }
    );

    const show_options = ref(false);

    watch(show_options, () =>
      context.emit("toggleShowOptions", show_options.value)
    );

    const hide_select = () => {
      show_options.value = false;
    };
    const open_close_options = () => {
      if (!props.disabled) {
        calcOptionsPosition();
        show_options.value = !show_options.value;
      }
    };
    const handleFocusOut = () => {
      hide_select();
    };

    const select_option = (option) => {
      if (option.value != "optgroup") {
        context.emit("select", option, props.idx);
        hide_select();
      }
    };

    onUnmounted(() =>
      window.removeEventListener("scroll", calcOptionsPosition)
    );

    const calcOptionsPosition = () => {
      const rect = title.value?.getBoundingClientRect();
      optionsWidth.value = rect.width - 2 + "px";
      optionsX.value = rect.x + "px";
      optionsY.value = rect.bottom + "px";
    };

    const title = ref(null);
    const optionsWidth = ref(null);
    const optionsX = ref(null);
    const optionsY = ref(null);

    return {
      open_close_options,
      handleFocusOut,
      show_options,
      options,
      select_option,
      title,
      optionsWidth,
      optionsX,
      optionsY,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/app.scss";
* {
  box-sizing: border-box;
}
@keyframes height_1 {
  from {
    height: 10px;
  }
  to {
    height: 20px;
  }
}
.list-enter-active,
.list-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.v-select {
  position: relative;
  width: 250px;
  box-sizing: border-box;
  @include font(400, 16px, 20px);
  .optgroup {
    @include font(500, 16px, 20px);
    background-color: #ffffff !important;
    cursor: default !important;
  }
  p {
    margin: 0;
    text-overflow: ellipsis;
    overflow-x: clip;
    white-space: nowrap;
    // max-width: 200px;
  }
  .title {
    height: 34px;
    width: 100%;
    padding: 6px 12px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    gap: 4px;
    background-color: white;
    border: 1px solid #ced4da;
    border-radius: 4px;
    transition: background-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
    cursor: pointer;
    outline: none;
  }
  .title_checked {
    border-color: #86b7fe;
    box-shadow: 0 0 0 2px rgb(13 110 253 / 25%);
  }
  .arrow {
    transition: transform 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rotate_arrow {
    transform: rotateX(180deg);
  }
  .options {
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .options::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .options {
    // position: absolute;
    // top: 100%;
    position: fixed;
    max-height: 400px;
    overflow-y: scroll;
    scrollbar-width: 0;
    // overflow-x: hidden;
    background-color: white;
    border: 1px solid #ced4da;
    // border-top: 0;
    // border-radius: 0 0 4px 4px;
    border-radius: 4px;
    width: fit-content;
    min-width: v-bind(optionsWidth);
    left: v-bind(optionsX);
    top: v-bind(optionsY);
    z-index: 5;
    p {
      cursor: pointer;
      height: 32px;
      width: 100%;
      padding: 6px 12px;
      transition: background-color 0.15s ease-out;
      white-space: pre;
      text-align: start;
    }
    p:hover {
      background-color: rgb(13 110 253 / 25%);
    }
    p:last-child {
      border-radius: 0 0 4px 4px;
    }
    p:active {
      background-color: #3261a7;
    }
  }
}
.selected {
  background-color: rgb(13 110 253 / 20%);
}
.disabled {
  background-color: #e9ecef !important;
  cursor: default !important;
}
</style>
