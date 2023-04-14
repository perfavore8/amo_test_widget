<template>
  <div class="modal">
    <div
      class="backdrop_with_filter sls_backdrop_with_filter"
      @click="close()"
    />
    <div class="wrapper">
      <div class="modal-header">
        <div class="head-text">Настройка таблицы</div>
      </div>
      <div class="modal-body">
        <div class="text">
          <small class="small-text"
            >Перетаскивайте колонки для изменения очередности</small
          >
        </div>
        <draggable class="dragArea" :list="list" @change="changeData">
          <div class="item" v-for="item in list" :key="item">
            <input
              type="checkbox"
              v-model="item.visible"
              :id="item.code"
              class="checkbox"
              :disabled="item.visible === 2 || item.visible === -1"
            />
            <label :for="item.code"></label>
            {{ item.name }}
          </div>
        </draggable>
      </div>
      <div class="modal-footer">
        <btns-save-close @close="close" @save="save" />
      </div>
    </div>
  </div>
</template>

<script>
import BtnsSaveClose from "@/components/BtnsSaveClose.vue";
// import { defineComponent } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
export default {
  components: {
    draggable: VueDraggableNext,
    BtnsSaveClose,
  },
  props: {},
  emits: {},
  data() {
    return {
      list: [],
    };
  },
  computed: {
    tableConfig() {
      return this.$store.state.fields.tableConfig;
    },
  },
  async mounted() {
    await this.$store.dispatch("getTableConfig", {
      account_id: 30214471,
      code: "widget",
    });
    const list = [];
    Object.entries(this.tableConfig).map((val) => {
      val[1].code = val[0];
      list.push(val[1]);
    });
    this.list = JSON.parse(JSON.stringify(list));
    this.list.map((item) => {
      if (item.visible === 1) item.visible = true;
      if (item.visible === 0) item.visible = false;
    });
  },
  methods: {
    async save() {
      this.list.map((val, idx) => (val.sort = idx + 1));
      const params = {
        config: [],
        code: "widget",
        account_id: 30214471,
      };
      this.list.forEach((val) => {
        if (val.visible) params.config.push(val.code);
      });
      await this.$store.dispatch("updateTableConfig", params);
      this.close();
    },
    close() {
      this.$emit("close");
      this.$store.commit("toggleShowTableSettings", false);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../app.scss";
.modal {
  pointer-events: all;
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
}
.backdrop_with_filter {
  z-index: 249;
}
.wrapper {
  z-index: 200;
  box-shadow: 0 0 7px 6px rgb(206 212 218 / 50%);
  display: flex;
  flex-direction: column;
  margin: auto;
  position: absolute;
  top: 1.75rem;
  left: calc(50% - 233px);
  height: auto;
  max-height: calc(100vh - 3.5rem);
  max-width: 600px;
  min-width: 500px;
  overflow-y: clip;

  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
  z-index: 250;
}
.modal-header {
  text-align: left;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
}
.modal-body {
  overflow-y: auto;
  padding: 16px;
  // padding-top: 0;
  .text {
    margin-bottom: 0.5rem !important;
    text-align: left;
    .small-text {
      @include font(400, 0.875em, 1.5);
    }
  }
}
.dragArea {
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  border-collapse: collapse;
}
.item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: grab;
  @include font(400, 1rem, 1.5);
  color: #212529;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-top: transparent;
}
.item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.item:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}
.checkbox {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
.checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  cursor: pointer;
  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
}
.checkbox:checked + label::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
.checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: #b3d7ff;
}
.checkbox:not(:disabled):active + label::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}
.checkbox:disabled + label::before {
  background-color: #e9ecef;
  border-color: #b3d7ff;
  cursor: default;
}
.modal-footer {
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
}
.head-text {
  @include font(500, 1.25em, 1.5);
}
</style>
