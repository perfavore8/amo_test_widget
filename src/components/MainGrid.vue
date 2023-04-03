<template>
  <div class="wrapper" v-if="!isLoading">
    <MainGridFilters
      ref="filters"
      v-if="all_fields.length && tableConfig != {} && sortedFields.length"
      :fields="all_fields"
      :tableConfig="tableConfig"
      :sortedFields="sortedFields"
    />
    <div class="main">
      <table class="table" ref="table">
        <thead>
          <main-grid-bar
            ref="bar"
            :fields="all_fields"
            @sort="sort"
            :tableConfig="tableConfig"
            :sortedFields="sortedFields"
            class="main-grid-bar"
          />
        </thead>
        <tbody v-if="products.length">
          <tr class="row" v-for="(row, idx) in products" :key="row.id">
            <td class="item">
              <div v-if="row.is_service">
                <input
                  type="number"
                  class="sls_input"
                  style="min-width: 70px"
                />
              </div>
              <div v-else>
                <AppInputSelect
                  style="min-width: 70px"
                  :list="
                    allWhsList[idx]?.filter(
                      (val) =>
                        val?.name
                          ?.toLowerCase()
                          ?.includes(inputValues[idx]?.toLowerCase()) &&
                        (row.allow_add_with_zero_count || !(val.count < 1))
                    )
                  "
                  :special="true"
                  :requestDelay="0"
                  :countLettersReq="0"
                  @changeInputValue="(value) => (inputValues[idx] = value)"
                />
              </div>
            </td>
            <template v-for="item in sortedFields" :key="item">
              <td class="item">
                <span v-if="item[0].split('.').length < 2">
                  {{
                    item[0] == "category"
                      ? categories?.[row.fields?.[item?.[0]]]
                      : item?.[1]?.type == 9
                      ? !!row.fields?.[item[0]]
                        ? "Да"
                        : "Нет"
                      : item[0] == "cost_price"
                      ? row.fields?.[item[0]]
                        ? Math.round(row.fields?.[item[0]] * 100) / 100
                        : "0"
                      : row.fields?.[item[0]]
                  }}
                </span>
                <span v-else>
                  {{
                    item[0].split(".")[1] == "cost"
                      ? row.fields?.[item[0].split(".")[0]]?.[
                          item[0]?.split(".")?.[1]
                        ] == undefined
                        ? "0"
                        : row.fields?.[item[0]?.split(".")?.[0]]?.[
                            item[0]?.split(".")?.[1]
                          ] +
                          " " +
                          (row.fields?.[item[0]?.split(".")?.[0]]?.currency ==
                            undefined ||
                          row.fields?.[item[0]?.split(".")?.[0]]?.currency ==
                            null
                            ? ""
                            : row.fields?.[item[0]?.split(".")?.[0]]?.currency)
                      : item[1].type == 9
                      ? !!row.fields?.[item[0]?.split(".")?.[0]]?.[
                          item[0]?.split(".")?.[1]
                        ]
                        ? "Да"
                        : "Нет"
                      : row.fields?.[item[0]?.split(".")?.[0]]?.[
                          item[0]?.split(".")?.[1]
                        ]
                  }}
                </span>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
      <label v-if="products.length == 0" class="text">
        Ничего не найдено
      </label>
    </div>
    <div class="right">
      <grid-bottom
        :page="page"
        :blur="show_edit_modal"
        :show="products.length != 0"
        :count="count"
        @changePage="changePage"
        @changeCount="changeCount"
      />
      <button class="sls_btn btn2" @click="accept()">Добавить к сделке</button>
    </div>
  </div>
</template>

<script>
import MainGridFilters from "@/components/MainGridFilters.vue";
import MainGridBar from "@/components/MainGridBar.vue";
import GridBottom from "@/components/GridBottom.vue";
import AppInputSelect from "./AppInputSelect.vue";
export default {
  name: "MainGrid",
  components: { MainGridFilters, MainGridBar, GridBottom, AppInputSelect },
  props: {},
  emits: {
    accept: null,
  },
  data() {
    return {
      isLoading: false,
      inputValues: [],
      allWhsList: [],
    };
  },
  computed: {
    page() {
      const obj = {
        first: this.getPageFromLink(this.meta?.links?.first),
        prev: this.getPageFromLink(this.meta?.links?.prev),
        current: this.meta?.meta?.current_page,
        next: this.getPageFromLink(this.meta?.links?.next),
        last: this.getPageFromLink(this.meta?.links?.last),
      };
      return obj;
    },
    count() {
      return this.productsParams?.per_page;
    },
    meta() {
      return this.$store.state.products.meta;
    },
    products() {
      return this.$store.state.products.allProducts;
    },
    productsParams() {
      return this.$store.state.products.productsParams;
    },
    all_fields() {
      return this.$store.state.fields.all_fields;
    },
    tableConfig() {
      return this.$store.state.fields.tableConfig;
    },
    sortedFields() {
      const list = Object.entries(this.tableConfig);
      return list
        .sort((a, b) => {
          if (a[1].sort > b[1].sort) return 1;
          if (a[1].sort == b[1].sort) return 0;
          if (a[1].sort < b[1].sort) return -1;
        })
        .filter((val) => val[1].visible);
    },
    categories() {
      const obj = {};
      this.$store.state.categories.fields_properties2.forEach(
        (val) => (obj[val.id] = val.name)
      );
      return obj;
    },
  },
  async activated() {
    this.isLoading = true;
    await Promise.all([
      this.$store.dispatch("getTableConfig", {
        account_id: 30214471,
        code: "",
      }),
      this.$store.dispatch("get_fields_properties2", {
        account_id: 30214471,
      }),
      this.$store.dispatch("getAllFields", { account_id: 30214471 }),
      this.get_products(this.productsParams),
    ]);
    this.isLoading = false;
  },
  deactivated() {},
  watch: {
    products: {
      handler: function () {
        this.fillAllWhsList();
      },
      deep: true,
    },
  },
  methods: {
    accept() {
      this.allWhsList.forEach((whs) => {
        whs.forEach((wh) => {
          if (wh.specialValue) {
            const params = {
              account_id: 30214471,
              productId: wh.product_id + "%%%" + wh.code,
              count: wh.specialValue,
            };
            this.$store.dispatch("addProduct2", params);
          }
        });
      });
      this.$emit("accept");
    },
    fillAllWhsList() {
      const res = [];

      this.products.forEach((product) => {
        const copyArr = product.whs?.map((a) => ({ ...a }));
        copyArr.map((wh) => {
          wh.name = wh.name + "   |   " + wh.count;
          wh.value = wh.code;
          wh.specialValue = 0;
          wh.product_id = product.id;
        });
        res.push(copyArr);
      });

      this.allWhsList = res;
    },
    fillInputValues() {
      this.products.forEach(() => this.inputValues.push(""));
    },
    getPageFromLink(link) {
      if (link) {
        return link.split("?page=")[1];
      } else {
        return null;
      }
    },
    async clearFilters() {
      await this.filters?.clearFilters();
      this.filters?.confirmFilters();
    },
    confirmFilters() {
      this.filters?.confirmFilters();
    },
    async changeCount(count) {
      this.$store.commit("updateProductsParams", { per_page: count });
      this.drop_page();
    },
    changePage(val) {
      const params = { page: val };
      this.$store.commit("updateProductsParams", params);
      this.get_products(this.productsParams);
    },
    async get_products(params) {
      await this.$store.dispatch("getAllProducts", {
        ...params,
        account_id: 30214471,
        leadId: 29768593,
      });
      this.fillInputValues();
    },
    drop_page() {
      this.changePage(1);
    },
    sort(code, order) {
      const params = {
        page: 1,
        sort: {
          by: code,
          order: order,
        },
      };
      this.$store.commit("updateProductsParams", params);
      this.get_products(this.productsParams);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/app.scss";
* {
  box-sizing: border-box;
}
.item {
  padding: 10px;
  padding-left: 15px;
  border: 1px solid #c9c9c9;
  @include font(400, 14px, 17px);
  color: #3f3f3f;
  text-align: start;
  min-width: 50px;
  .input-select:deep(.item) {
    justify-content: flex-start;
  }
  .input {
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    outline: none;
    border: none;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    padding: 5px;
    background: transparent;
    appearance: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .modal_form {
    width: 40px;
    height: 28px;
    margin-left: 10px;
    background: #f0f0f0;
    position: relative;
    border-radius: 4px;
  }
}
.row {
}
.table {
  border-collapse: collapse;
  margin: 0 auto;
  width: 100%;
  display: block;
  overflow: scroll;
  max-height: calc(100vh - 550px);
}
.bar_row {
  height: 66px;
}
.bar_item {
  background: #e5e5e5;
  @include font(500, 16px, 19px);
  color: #000000;
  vertical-align: middle;
  cursor: pointer;
}
.bar_item_group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
.count {
  margin-left: 5px;
  height: 26px;
  width: 100px;
}
.item:first-child {
  padding-left: 5px;
}
.bar_item:first-child {
  width: 17px !important;
}

.right {
  // margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .btn2 {
    color: #fff;
    // background-color: #0d6efd;
    background: linear-gradient(
      135deg,
      hsl(216, 98%, 57%),
      hsl(216, 98%, 52%),
      hsl(216, 98%, 42%)
    );
    transition: background 0.15s ease-out;
  }
  .btn2:hover {
    box-shadow: 0 0 5px 2px rgb(2 86 212 / 25%);
  }
}
.blur {
  filter: blur(5px);
}
.text {
  margin: 0 auto;
  @include font(500, 18px);
}
.mdl-enter-active,
.mdl-leave-active {
  transition: opacity 0.15s ease-in-out;
}
.mdl-enter-from,
.mdl-leave-to {
  opacity: 0;
}
.rows-enter-active,
.rows-leave-active {
  transition: opacity 0.15s ease-in-out;
}
.rows-enter-from,
.rows-leave-to {
  opacity: 0;
}
</style>
