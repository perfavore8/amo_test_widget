<template>
  <div class="app_modal">
    <div class="sls_backdrop_with_filter" @click="close()" />
    <div class="sls_container">
      <div class="sls_header">
        <div class="saved">
          <div v-for="(whs, idx) in savedAllWhsList" :key="whs" class="item">
            {{ whs[0].product_name }} :
            {{ whs.reduce((sum, wh) => (sum += Number(wh.specialValue)), 0) }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              @click="deleteSavedAllWhsList(idx)"
            >
              <path
                fill="red"
                d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"
              />
            </svg>
          </div>
        </div>
        <button
          class="sls_btn btn2"
          @click="accepMainGridRef()"
          v-if="savedAllWhsList.length"
        >
          Добавить к сделке
        </button>
        <button class="exit" @click="close()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div class="sls_content">
        <keep-alive>
          <main-grid
            @changeSavedAllWhsList="changeSavedAllWhsList"
            @accept="accept"
            class="main_grid"
            ref="mainGridRef"
          />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import MainGrid from "@/components/MainGrid.vue";
import { nextTick, ref } from "vue";
export default {
  components: {
    MainGrid,
  },
  emits: {
    close: null,
  },
  setup(props, context) {
    const close = () => {
      context.emit("close");
    };
    const accept = () => {
      savedAllWhsList.value = [];
      close();
    };

    const savedAllWhsList = ref([]);
    const changeSavedAllWhsList = (list) => {
      savedAllWhsList.value = [...list];
    };

    const mainGridRef = ref(null);

    const deleteSavedAllWhsList = (idx) => {
      if (mainGridRef.value)
        nextTick(() => mainGridRef.value?.deleteSavedAllWhsList(idx));
    };

    const accepMainGridRef = () => {
      if (mainGridRef.value) nextTick(() => mainGridRef.value?.accept());
    };

    return {
      close,
      accept,
      accepMainGridRef,
      savedAllWhsList,
      changeSavedAllWhsList,
      mainGridRef,
      deleteSavedAllWhsList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/app.scss";
* {
  box-sizing: border-box;
}
.app_modal {
  pointer-events: all;
  width: 100%;
  overflow: scroll;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  .sls_container {
    position: relative;
    z-index: 200;
    width: 90%;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    margin: 30px auto;
    outline: 0;
    box-shadow: 0 0 7px 6px rgb(206 212 218 / 50%);
    text-align: left;
    display: flex;
    flex-direction: column;
    .sls_header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px 50px;
      @include font(500, 20px);
      border-bottom: 2px solid #dee2e6;
      .saved {
        @include font(400, 16px);
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        .item {
          display: flex;
          align-items: center;
          > svg {
            cursor: pointer;
          }
        }
      }
      .exit {
        background: transparent;
        border-radius: 0 5px 5px 0;
        height: 36px;
        width: 36px;
        margin: 0 auto;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.15s ease-out;
        margin: 0;
        margin-right: -10px;
      }
      .exit:hover {
        transform: rotate(90deg);
      }
    }
    .sls_content {
      @include font(400, 16px);
      padding: 15px 50px;
      border-bottom: 2px solid #dee2e6;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .main_grid {
        overflow-x: auto;
        max-width: 100%;
        min-height: 500px;
      }
    }
    .sls_footer {
      display: flex;
      justify-content: end;
      padding: 15px 50px;
      .btns {
        display: flex;
        flex-direction: row;
        gap: 10px;
        .btn1 {
          color: #fff;
          background-color: #6c757d;
          background: linear-gradient(
            135deg,
            hsl(208, 7%, 54%),
            hsl(208, 7%, 46%),
            hsl(206, 7%, 38%)
          );
        }
        .btn1:hover {
          background-color: #5f676d;
          box-shadow: 0 0 5px 2px rgb(95 103 109 / 25%);
        }
      }
    }
  }
}
.btn2 {
  color: #fff;
  // background-color: #0d6efd;
  background: #3e6a97;
  transition: background 0.15s ease-out;
}
.btn2:hover {
  box-shadow: 0 0 5px 2px rgb(2 86 212 / 25%);
}
</style>
