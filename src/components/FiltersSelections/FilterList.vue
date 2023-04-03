<template>
  <div class="filter">
    <button @click="open_selector()">
      <div class="arrow" :class="{ rotate_arrow: show_selector }">
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
    </button>
    <template v-if="show_selector">
      <div class="backdrop" @click="closeSelector()" />
      <multi-selector
        class="selector"
        id="selector123"
        :options_props="[{ name: 'Все', value: '' }, ...selector_options]"
        @select="option_select_multi"
        :selected_options="filterValue"
        tabindex="1"
      />
    </template>
  </div>
</template>

<script>
import { nextTick } from "vue";
import MultiSelector from "@/components/MultiSelector";
export default {
  components: {
    MultiSelector,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
    selector_options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filterValue: [],
      show_selector: false,
    };
  },
  computed: {
    option_value() {
      return {
        value: this.filterValue,
      };
    },
  },
  watch: {
    option_value: {
      handler() {
        this.emit_value();
      },
      deep: true,
    },
    item() {
      this.change_value();
    },
  },
  mounted() {
    this.change_value();
  },
  methods: {
    change_value() {
      nextTick(() => {
        this.filterValue = [false];
        this.item.value.forEach((val, idx) => {
          this.filterValue[idx + 1] = val;
        });
      });
    },
    emit_value() {
      const res = {
        value: [],
      };
      const arr = [{ name: "Все", value: "" }, ...this.selector_options];
      this.option_value.value.forEach((val, idx) =>
        val
          ? this.item.type == 12
            ? res.value.push(arr[idx]?.value)
            : res.value.push(arr[idx]?.name)
          : null
      );
      this.$emit("change_filter_value", res, this.idx);
    },
    option_select_multi(options) {
      this.filterValue = options;
    },
    open_selector() {
      this.show_selector = true;
      nextTick(() => {
        if (this.show_selector) {
          document.getElementById("selector123").focus();
        }
      });
    },
    handleFocusOut() {
      setTimeout(() => {
        nextTick(() => {
          this.show_selector = false;
        });
      }, 150);
    },
    closeSelector() {
      this.show_selector = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/app.scss";
* {
  box-sizing: border-box;
}
.filter {
  max-width: 100px;
  min-width: 50px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 27px;
    background: white;
    border: 0.5px solid #c4c4c4;
    border-radius: 4px;
    z-index: 2;
    cursor: pointer;
    .arrow {
      transition: transform 0.2s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .rotate_arrow {
      transform: rotateX(180deg);
    }
  }
  .selector {
    position: absolute;
    z-index: 50;
    margin-top: 30px;
    // max-width: 224px;
  }
  // .multi_selector {
  //   width: fit-content;
  //   max-width: none;
  //   :deep(.item) {
  //     white-space: pre;
  //     width: max-content;
  //     min-width: 100%;
  //   }
  // }
}
.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  z-index: 49;
}
</style>
