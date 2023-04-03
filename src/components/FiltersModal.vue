<template>
  <div class="app_modal">
    <div class="sls_backdrop_with_filter" @click="close()" />
    <div class="container">
      <div class="header">
        <label></label>
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
      <div class="content">
        <keep-alive>
          <main-grid @accept="accept" class="main_grid" />
        </keep-alive>
      </div>
      <div class="footer">
        <div class="btns">
          <button class="sls_btn btn1" @click="close()">Назад</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainGrid from "@/components/MainGrid.vue";
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
      close();
    };

    return {
      close,
      accept,
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
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  .container {
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
    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px 50px;
      @include font(500, 20px);
      border-bottom: 2px solid #dee2e6;
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
    .content {
      @include font(400, 16px);
      padding: 15px 50px;
      border-bottom: 2px solid #dee2e6;
      display: flex;
      flex-direction: column;
      gap: 10px;
      overflow: scroll;
      max-height: calc(100vh - 200px);

      .main_grid {
        overflow-x: auto;
        max-width: 100%;
      }
    }
    .footer {
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
</style>
