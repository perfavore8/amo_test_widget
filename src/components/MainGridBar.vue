<template>
  <tr class="bar_row">
    <th class="bar_item item">
      <div @click="openTableSettings()" class="tableSettings">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
        >
          <path
            fill="#757575"
            d="M495.9 166.6c3.2 8.7.5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4l-55.6 17.8c-8.8 2.8-18.6.3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4c-1.1-8.4-1.7-16.9-1.7-25.5s.6-17.1 1.7-25.4l-43.3-39.4c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160a80 80 0 1 0 0 160z"
          />
        </svg>
      </div>
    </th>
    <th
      class="bar_item item"
      :style="{
        minWidth:
          width[idx] != 0
            ? width[idx] + 'px'
            : (collsCount >= 8 ? 100 : collsCount > 3 ? 100 : 100) /
                collsCount +
              '%',
      }"
      v-for="(field, idx) in sortedFields"
      @click="field[1].sortable && field[1].type != 9 ? sort(field[0]) : null"
      :key="field"
    >
      <div class="bar_item_group">
        <label>{{ field[1].name }}</label>
        <button
          class="bar_item_icon"
          v-if="field[1].sortable && field[1].type != 9"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            v-if="order.code === field[0] && order.prev_order === 'desc'"
          >
            <path
              fill="none"
              stroke="#757575"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v14m4-10l-4-4M8 9l4-4"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            v-else-if="order.code === field[0] && order.prev_order === 'asc'"
          >
            <path
              fill="none"
              stroke="#757575"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v14m4-4l-4 4m-4-4l4 4"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            v-else
          >
            <path
              fill="none"
              stroke="#757575"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m11 16l-3 3m0 0l-3-3m3 3V5m5 3l3-3m0 0l3 3m-3-3v14"
            />
          </svg>
        </button>
      </div>
    </th>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    fields: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    sortedFields: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    tableConfig: {
      type: Object,
    },
  },
  data() {
    return {
      order: {
        code: "",
        prev_order: "",
      },
      disableExportXlsx: false,
      allSelectedProducts: false,
    };
  },
  computed: {
    ...mapGetters(["fields"]),
    collsCount() {
      return this.tableConfig.length;
    },
    productsParams() {
      return this.$store.state.products.productsParams;
    },
    width() {
      let arr = [];
      this.fields.forEach((field) => {
        let a = 0;
        if (field.type == 9) a = 90;
        if (field.type == 7 || field.type == 8) a = 150;
        arr.push(a);
      });

      return arr;
    },
  },
  methods: {
    isShow(code) {
      let res = false;
      Object.entries(this.tableConfig).forEach((val) => {
        if (val[0].split(".")[0] == code && val[1]?.visible) res = true;
      });
      return res;
    },
    dropOrder() {
      this.order = {
        code: "",
        prev_order: "",
      };
    },
    sort(code) {
      const order_values = ["asc", "desc"];
      let new_order = "";
      this.order.code === code && this.order.prev_order == order_values[0]
        ? (new_order = order_values[1])
        : (new_order = order_values[0]);
      this.order = { code: code, prev_order: new_order };
      if (code.split(".").length > 1) code = code.split(".").join("->");
      this.$emit("sort", code, new_order);
    },
    async exportXlsx() {
      this.disableExportXlsx = true;
      this.$store.commit("openCloseTaskCenter", true);
      setTimeout(() => {
        this.$store.commit("openCloseTaskCenter", false);
      }, 5000);
      const { sort, filter } = this.productsParams;
      const sortedTableConfig = [];
      Object.entries(this.tableConfig)
        .filter((val) => val[1].visible)
        .sort((a, b) => {
          if (a[1].sort > b[1].sort) return 1;
          if (a[1].sort == b[1].sort) return 0;
          if (a[1].sort < b[1].sort) return -1;
        })
        .forEach((val) => sortedTableConfig.push(val[0]));
      const params = {
        sort: sort,
        filter: filter,
        config: sortedTableConfig,
      };
      this.$store.dispatch("exportXlsx", params);
      // const blob = await this.$store.dispatch("exportXlsx", params);
      // const file = window.URL.createObjectURL(blob);
      // window.location.assign(file);
      // this.disableExportXlsx = false;
    },
    changeAllSelectedProducts() {
      this.$emit("changeAllSelectedProducts", this.allSelectedProducts);
    },
    dropAllSelectedProducts() {
      this.allSelectedProducts = false;
    },
    openTableSettings() {
      this.$store.commit("toggleShowTableSettings", true);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/app.scss";
* {
  box-sizing: border-box;
}
.bar_row {
  height: 66px;
  .item {
    padding: 10px;
    padding-left: 15px;
    border: 1px solid #c9c9c9;
    @include font(400, 14px, 17px);
    color: #3f3f3f;
    text-align: start;
    min-width: 50px;
  }
  .bar_item {
    background: #e5e5e5;
    @include font(500, 16px, 19px);
    color: #000000;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    label {
      cursor: inherit;
    }

    .bar_item_group {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;

      .bar_item_icon {
        height: 24px;
        width: 24px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-out;
      }
    }
  }
  .bar_item:first-child {
    cursor: default;
    width: 17px !important;
    font-size: 18px;
    .checkbox + label::before {
      margin-right: 0;
    }
  }
  .bar_item:last-child {
    cursor: default;
    width: 20px !important;
    div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}
.settings_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: none;
  background-color: transparent;
  color: #757575;
  outline: none;
  transition: all 0.15s ease-out;
}
.settings_btn:hover {
  transform: rotate(90deg) scale(1.1);
}
.test_btn {
  border: none;
  background-color: transparent;
  color: #757575;
  cursor: pointer;
  transition: all 0.2s ease-out;
}
.test_btn:hover {
  transform: scale(1.1);
}
.test_btn:disabled {
  color: #7575758a;
}
.tableSettings {
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  padding: 6px;
  cursor: pointer;
  margin: 0 auto;
  border-radius: 50%;
  transition: all 0.2s ease-out;
}
.tableSettings:hover {
  transform: rotate(90deg) scale(1.1);
}
</style>
