<template>
  <div class="input-select">
    <input
      type="text"
      class="sls_input"
      :class="{
        input_uderline: input_uderline,
        black_text: SelectedInTitle && selected?.name,
      }"
      v-model="inputValue"
      @click="openList()"
      :placeholder="
        SelectedInTitle && selected?.name ? selected?.name : placeholder
      "
      ref="title"
    />
    <template v-if="showList">
      <div class="backdrop" @click="closeList()" />
      <transition-group name="list">
        <template v-if="list.length">
          <ul class="list">
            <li
              class="item"
              :class="{ selected: item.value === selected?.value }"
              v-for="item in list"
              :key="item.value"
              @click="selectItem(item)"
            >
              <input
                v-if="special"
                type="number"
                class="sls_input"
                v-model="item.specialValue"
                style="width: 100px; min-width: 1%"
              />
              {{ item.name }}
            </li>
          </ul>
        </template>
        <template v-else>
          <div class="placeholder" v-if="showPlaceholder">
            <div class="item" v-for="i in 4" :key="i">
              <div>
                <div class="title"></div>
                <div class="text"></div>
              </div>
              <div class="aside"></div>
            </div>
          </div>
        </template>
      </transition-group>
    </template>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted, watch } from "@vue/runtime-core";
export default {
  props: {
    list: Array,
    selected: { type: Object, required: false },
    countLettersReq: { type: Number, required: false, default: () => 0 }, // кол-во символов для отправки запроса
    requestDelay: { type: Number, required: false, default: () => 300 }, // <--  миллисекунды
    placeholder: { type: String, required: false },
    input_uderline: { type: Boolean, required: false, default: () => false }, // стиль интпута
    SelectedInTitle: { type: Boolean, required: false, default: () => false }, // показывать выбранный итем в тайтле
    special: { type: Boolean, required: false, default: () => false }, // специальный режим
  },
  emits: ["changeInputValue", "focusIn", "select"],
  setup(props, context) {
    const inputValue = ref("");

    const timer = ref(null);

    const showPlaceholder = ref(false);

    const changeInputValue = () => {
      showPlaceholder.value = false;
      clearTimeout(timer.value);
      if (inputValue.value.length >= props.countLettersReq) {
        showPlaceholder.value = true;
        timer.value = setTimeout(() => {
          context.emit("changeInputValue", inputValue.value);
          setTimeout(
            () => (showPlaceholder.value = false),
            props.requestDelay * 3
          );
        }, props.requestDelay);
      }
    };

    watch(inputValue, () => changeInputValue());

    const showList = ref(false);
    const closeList = () => (showList.value = false);
    const openList = () => (
      (showList.value = true), focusIn(), changeInputValue()
    );
    const focusIn = () => context.emit("focusIn");

    const selectItem = (item) => {
      if (!props.special) {
        context.emit("select", item);
        closeList();
        inputValue.value = "";
      }
    };

    if (props.special)
      watch(
        props.list,
        () => {
          props.list.map((item) => {
            if (item.specialValue > item.count) item.specialValue = item.count;
            if (item.specialValue < 0) item.specialValue = 0;
          });
        },
        { deep: true }
      );

    onMounted(() => {
      window.addEventListener("scroll", calcListPosition);
    });

    onUnmounted(() => window.removeEventListener("scroll", calcListPosition));

    watch(showList, () => {
      calcListPosition();
    });

    const calcListPosition = () => {
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
      inputValue,
      showList,
      closeList,
      openList,
      selectItem,
      showPlaceholder,
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
.input-select {
  position: relative;
  .black_text::placeholder {
    color: black;
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
  .list::-webkit-scrollbar {
    display: none;
  }
  .list {
    min-width: v-bind(optionsWidth);
    left: v-bind(optionsX);
    top: v-bind(optionsY);
    z-index: 50;
    list-style-type: none;
    position: fixed;
    // position: absolute;
    // top: calc(100% + 8px);
    // left: 0;
    border-radius: 4px;
    list-style: none;
    max-height: 400px;
    min-height: 40px;
    overflow-y: scroll;
    scrollbar-width: 0;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin: 0;
    padding: 0;
    background-color: white;
    border: 1px solid #ced4da;
    border-radius: 4px;
    // min-width: 100%;

    box-sizing: border-box;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      cursor: pointer;
      height: 40px;
      width: 100%;
      padding: 6px 12px;
      transition: background-color 0.15s ease-out;
      white-space: nowrap;
      border-top: 1px solid #ced4da7d;
    }
    .item:hover {
      background-color: rgb(13 110 253 / 25%);
    }
    .item:last-child {
      border-radius: 0 0 4px 4px;
    }
    .item:first-child {
      border-top: none;
      border-radius: 4px 4px 0 0;
    }
    .item:active {
      background-color: #3261a7;
    }
    .selected {
      background-color: rgb(13 110 253 / 20%);
    }
  }
  .placeholder {
    box-sizing: border-box;
    z-index: 49;
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    border-radius: 4px;
    padding: 16px;
    padding-bottom: 8px;
    border: 1px solid rgb(229 231 235);
    background-color: #fff;
    border-radius: 4px;
    min-width: 100%;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    .item {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

      @keyframes pulse {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.3;
        }
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px 0;
      height: 40px;
      border-top: 1px solid rgb(229 231 235);
      &:first-child {
        border-top: none;
        padding-top: 0;
      }
      .title {
        height: 10px;
        background-color: rgb(209 213 219);
        border-radius: 9999px;
        margin-bottom: 10px;
        width: 48px;
      }
      .text {
        width: 80px;
        height: 8px;
        background-color: rgb(229 231 235);
        border-radius: 9999px;
      }
      .aside {
        height: 10px;
        background-color: rgb(209 213 219);
        border-radius: 9999px;
        width: 24px;
      }
    }
  }
}
input[type="number"] {
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  display: none;
}
.list-enter-active,
.list-leave-active {
  transition: opacity 0.2s ease-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
