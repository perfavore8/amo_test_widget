<template>
  <div class="app">
    <div class="container1">
      <div class="header"></div>
      <div class="content">
        <div class="top">
          <AppInputSelect
            :list="search.list"
            :value="search.value"
            :placeholder="'Добавление (поиск на складе по названию или артикулу)...'"
            :countLettersReq="3"
            @changeInputValue="getProductsAutocomplete"
            @select="(value) => addToLeadAutocomplete(value.id)"
          />
          <div class="btns">
            <input
              type="checkbox"
              class="sls_checkbox"
              v-model="show_cards"
              id="grid"
            />
            <label for="grid"></label>
            <div class="sls_btn" id="sls_btn_open_filter" @click="openModal()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12 19q-.425 0-.713-.288T11 18v-5H6q-.425 0-.713-.288T5 12q0-.425.288-.713T6 11h5V6q0-.425.288-.713T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <transition name="rows">
          <div class="bottom" v-if="show_cards">
            <div class="links">
              <div
                class="triangle"
                :class="{
                  triangle_last:
                    !categories.length && selectedCategories.length - 1 == idx,
                }"
                :disabled="
                  !categories.length && selectedCategories.length - 1 == idx
                "
                v-for="(cat, idx) in selectedCategories"
                :key="cat"
                @click="selectCategories(cat)"
              >
                {{ cat?.name }}
              </div>
            </div>
            <div class="spinner" v-if="showSpinner">
              <img
                src="https://warehouse2.salesup.pro/images/spinner.gif"
                alt="spinner"
              />
            </div>
            <template v-else>
              <div class="path">
                <div class="categories grid">
                  <div
                    class="card"
                    v-for="cat in categories"
                    :key="cat"
                    @click="selectCategories(cat)"
                  >
                    <div class="row title">
                      <div class="name"></div>
                      <div class="value">{{ cat.name }}</div>
                    </div>
                    <div class="row" />
                  </div>
                </div>
              </div>
              <div class="products grid">
                <label v-if="products.length == 0" class="text">
                  Ничего не найдено
                </label>
                <template v-else>
                  <div
                    class="card"
                    v-for="(product, idx) in products"
                    :key="product"
                  >
                    <div class="row title">
                      <div class="name"></div>
                      <div class="value">{{ product?.fields?.name }}</div>
                    </div>
                    <div class="rows">
                      <template v-for="field in sortedFields" :key="field">
                        <template v-if="field.lead_config.visible > 0">
                          <template v-if="field.type === 11">
                            <div class="row">
                              <div class="name font-medium">
                                {{ field.name }} :
                              </div>
                              <div class="value">
                                {{
                                  product?.fields[field.code]?.cost
                                    ? product?.fields[field.code]?.cost
                                    : "" +
                                      " " +
                                      product?.fields[field.code]?.currency
                                    ? product?.fields[field.code]?.currency
                                    : ""
                                }}
                              </div>
                            </div>
                            <template
                              v-if="product?.fields[field.code]?.is_nds"
                            >
                              <div class="row ml-1">
                                <div class="name">НДС :</div>
                                <div class="value">
                                  {{ product?.fields[field.code]?.nds }}
                                </div>
                              </div>
                              <div class="row ml-1">
                                <div class="name">НДС включен в цену :</div>
                                <div class="value">
                                  {{
                                    product?.fields[field.code]
                                      ?.is_price_include_nds
                                      ? "Да"
                                      : "Нет"
                                  }}
                                </div>
                              </div>
                            </template>
                          </template>
                          <template v-else-if="field.type === 13">
                            <div class="row">
                              <div class="name font-medium">
                                {{ field.name }} :
                              </div>
                              <div class="value"></div>
                            </div>
                            <div class="row ml-1">
                              <div class="name">На складе :</div>
                              <div class="value">
                                {{ product?.fields[field.code]?.count }}
                              </div>
                            </div>
                            <div class="row ml-1">
                              <div class="name">В резерве :</div>
                              <div class="value">
                                {{ product?.fields[field.code]?.reserve }}
                              </div>
                            </div>
                          </template>
                          <template v-else-if="field.code === 'name'" />
                          <div class="row" v-else>
                            <div class="name">{{ field.name }} :</div>
                            <div class="value">
                              {{ product?.fields[field.code] }}
                            </div>
                          </div>
                        </template>
                      </template>
                    </div>
                    <div class="card_footer">
                      <div v-if="product.is_service">
                        <input
                          v-if="allWhsList?.[idx]?.length"
                          type="number"
                          class="sls_input"
                          style="min-width: 70px"
                          v-model="allWhsList[idx][0].specialValue"
                        />
                      </div>
                      <div v-else>
                        <AppInputSelect
                          style="min-width: 70px"
                          v-if="allWhsList?.[idx]?.length"
                          :list="
                            allWhsList?.[idx]?.filter(
                              (val) =>
                                val?.name
                                  ?.toLowerCase()
                                  ?.includes(inputValues[idx]?.toLowerCase()) &&
                                (product.allow_add_with_zero_count ||
                                  !(val.count < 1))
                            )
                          "
                          :special="true"
                          :requestDelay="0"
                          :countLettersReq="0"
                          :allow_add_with_zero_count="
                            product.allow_add_with_zero_count
                          "
                          :placeholder="
                            allWhsList?.[idx]?.reduce(
                              (sum, wh) => (sum += Number(wh?.specialValue)),
                              0
                            )
                          "
                          @changeInputValue="
                            (value) => (inputValues[idx] = value)
                          "
                        />
                      </div>
                      <div
                        class="sls_btn btn_del"
                        @click="addToLead(product.id)"
                      >
                        Добавить к сделке
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </transition>
      </div>
      <div class="footer"></div>
    </div>
  </div>
  <teleport to="body">
    <transition name="rows">
      <keep-alive>
        <filters-modal
          v-if="show_filters"
          @close="close_filters"
          @update_changeValue="update_changeValue"
        ></filters-modal>
      </keep-alive>
    </transition>
  </teleport>
</template>

<script>
import { mapGetters } from "vuex";
import AppInputSelect from "@/components/AppInputSelect.vue";
import FiltersModal from "@/components/FiltersModal.vue";
import { amoWidjetSelf } from "@/main";
export default {
  components: {
    AppInputSelect,
    FiltersModal,
  },
  data() {
    return {
      show_cards: false,
      show_filters: false,
      selectedCategories: [],
      search: {
        value: "",
        list: [],
      },
      inputValues: [],
      allWhsList: [],
      showSpinner: false,
      // fields: [
      //   { name: "Количество", change: true },
      //   { name: "Поставщик", change: true },
      //   { name: "Группа", change: false },
      //   { name: "Артикул", change: false },
      //   { name: "На складе", change: false },
      //   { name: "В резерве", change: false },
      //   { name: "Цена", change: true },
      //   { name: "Себестоимость", change: false },
      //   { name: "№ партии", change: false },
      //   { name: "Описание", change: true },
      //   { name: "Единицы измерений", change: false },
      //   { name: "Поступление", change: false },
      //   { name: "Сумма ₽", change: false },
      //   { name: "Итого к оплате ₽", change: false },
      //   { name: "Прибыль ₽", change: false },
      // ],
    };
  },
  computed: {
    ...mapGetters(["data", "params"]),
    categories() {
      return this.$store.state.categories.categories;
    },
    products() {
      return this.$store.state.products.products;
    },
    fields() {
      return this.$store.state.fields.fields;
    },
    sortedFields() {
      return this.fields?.filter((field) => field.lead_config?.visible > 0);
    },
  },
  async mounted() {
    // this.get_data_categories();
    // this.feel_available_data();
    console.debug("amoWidjetSelf", amoWidjetSelf);
    await Promise.all([
      this.getCategories(0),
      this.$store.dispatch("getAllFields", { account_id: 30214471 }),
    ]);
    this.selectCategories(this.categories[0]);
  },
  watch: {
    async show_cards() {
      if (!this.show_cards) {
        this.selectedCategories = [];
        await this.getCategories(0);
      }
    },
  },
  methods: {
    fillAllWhsList() {
      const res = [];

      this.products.forEach((product) => {
        const copyArr = product.whs?.map((a) => ({ ...a }));
        copyArr.map((wh) => {
          wh.name = wh.name + "   |   " + wh.count;
          wh.value = wh.code;
          wh.specialValue = null;
        });
        res.push(copyArr);
      });

      this.allWhsList = res;
    },
    fillInputValues() {
      this.products.forEach(() => this.inputValues.push(""));
    },
    addToLeadAutocomplete(id) {
      this.$store.dispatch("addProduct", {
        account_id: 30214471,
        productId: id,
      });
    },
    addToLead(id) {
      const product = this.products.find((product) => product.id === id);
      const idx = this.products.indexOf(product);
      if (product.is_service) {
        this.$store.dispatch("addProduct2", {
          account_id: 30214471,
          productId: id,
          count: this.allWhsList[idx][0].specialValue,
        });
      } else {
        this.allWhsList[idx].forEach((wh) => {
          if (wh.specialValue !== 0) {
            this.$store.dispatch("addProduct2", {
              account_id: 30214471,
              productId: [id, wh.code].join("%%%"),
              count: wh.specialValue,
            });
          }
        });
      }
    },
    async getProductsAutocomplete(q) {
      this.search.value = q;
      const category_id = this.selectedCategories.at(-1)?.id;
      const params = { account_id: 30214471, q: q };
      if (category_id) params.category_id = category_id;
      await this.$store.dispatch("getProductsAutocomplete", params);
      const res = this.$store.state.products.productsAutocomplete;
      res.map((val) => (val.name = val.label));
      this.search.list = res;
    },
    async selectCategories(cat) {
      this.showSpinner = true;
      const idx = this.selectedCategories?.indexOf(cat);
      if (idx !== -1) {
        this.selectedCategories.splice(idx, 9999);
      }
      this.selectedCategories.push(cat);
      await Promise.all([this.getCategories(cat.id), this.getProducts(cat.id)]);
      if (this.selectedCategories.length === 1) await this.getFields(cat.id);
      this.showSpinner = false;
    },
    async getCategories(id) {
      await this.$store.dispatch("getCategories", {
        account_id: 30214471,
        parent_id: id,
      });
    },
    async getProducts(id) {
      await this.$store.dispatch("getProducts", {
        account_id: 30214471,
        category_id: id,
      });
      this.fillInputValues();
      this.fillAllWhsList();
    },
    async getFields(id) {
      await this.$store.dispatch("getFields", {
        account_id: 30214471,
        category_id: id,
        with_parents: 1,
      });
      // console.debug(this.fields);
      // console.debug(this.sortedFields);
    },
    handleDeleteItem(row, idx) {
      const obj = {
        name: this.short_value(row),
        data: row,
        value: Math.random(),
      };
      this.available_data.push(obj);
      this.rows.splice(idx, 1);
      this.countes.splice(idx, 1);
    },
    update_changeValue(arr, countes) {
      arr.forEach((val, idx) => {
        if (!this.rows.includes(val)) {
          let array = [];
          val.forEach((item) => array.push(item));
          this.rows.push(array);
          let count = null;
          countes[idx] == undefined ? (count = 0) : (count = countes[idx]);
          const obj = {
            count: count,
            company: "",
          };
          this.countes.push(obj);
        }
      });
    },
    close_filters() {
      this.show_filters = false;
    },
    select(value) {
      this.available_data.forEach((val, idx) => {
        if (val.data == value.data) this.available_data.splice(idx, 1);
      });
      this.rows.push(value.data);
      const obj = {
        count: 1,
        company: "",
      };
      this.countes.push(obj);
    },
    feel_available_data() {
      this.data.forEach((val, idx) => {
        const obj = {
          name: this.short_value(val),
          data: val,
          value: idx,
        };
        this.available_data.push(obj);
      });
    },
    search_value(str, row) {
      const idx = this.search_idx(str);
      if (idx != -2) {
        return row[idx];
      }
    },
    search_idx(str) {
      const idx = this.params.indexOf(str) - 1;
      return idx;
    },
    toggleShowData(idx) {
      const val = this.show_data[idx];
      this.show_data = [];
      this.show_data[idx] = !val;
    },
    openModal() {
      this.show_filters = true;
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/app.scss";
* {
  box-sizing: border-box;
}
.app {
  height: 100%;
  .container1 {
    box-sizing: border-box;
    // overflow-y: auto;
    width: 100%;
    height: 100%;
    .header {
      margin-bottom: 30px;
    }
    .content::-webkit-scrollbar {
      width: 0;
    }
    .content {
      height: 100%;
      .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .input-select {
          width: 80%;
          margin: 2px;
        }
        .input-select:deep(.item) {
          justify-content: start;
        }
        .btns {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 15px;
          .sls_checkbox + label::before {
            width: 32px;
            height: 32px;
            margin-left: 17px;
            border: none;
            transition: all 0.15s ease-ount;
            filter: contrast(0.5);
            transform: rotateX(180deg);
            @include bg_image(
              "https://www.svgrepo.com/show/510838/arrow-up-sm.svg",
              100%
            );
          }
          .sls_checkbox:checked + label::before {
            border-color: transparent;
            background-color: transparent;
            @include bg_image(
              "https://www.svgrepo.com/show/510838/arrow-up-sm.svg",
              100%
            );
            transform: rotateX(0deg);
            background-position: center center;
          }
          .sls_checkbox:not(:checked) + label:hover::before {
            background-size: 110%;
          }
          .sls_checkbox:checked + label:hover::before {
            background-size: 110%;
            background-position: center center;
          }
          .sls_checkbox:not(:disabled):active + label::before {
            background-color: transparent;
          }
          .sls_btn {
            width: 32px;
            height: 32px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            // background: #018361;
            background: linear-gradient(135deg, #00cc8f, #40bf99, #018360db);
            border-radius: 8px;
            padding: 0;
            .icon {
              height: 20px;
              width: 20px;
              @include bg_image(
                "https://www.svgrepo.com/show/510785/add-plus.svg",
                100%
              );
            }
          }
          .sls_btn:hover,
          .sls_btn:focus-visible {
            background-color: #40bf99;
            box-shadow: 0 0 5px 2px rgb(64 191 153 / 25%);
          }
          .sls_btn:active {
            background-color: #00cc8f;
            box-shadow: 0 0 5px 2px rgb(0 204 143 / 25%);
            height: 31px;
            width: 31px;
          }
        }
      }
      .bottom {
        margin-top: 30px;
        .links {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin-bottom: 10px;
          $step: 12px;

          .triangle {
            cursor: pointer;
            padding: 5px 10px 5px 15px;
            height: 30px;
            margin: 5px 0;
            border: none;
            @include font(400, 15px);
            -webkit-clip-path: polygon(
              0 0,
              calc(100% - $step) 0,
              100% 50%,
              calc(100% - $step) 100%,
              0% 100%,
              $step 50%
            );
            clip-path: polygon(
              0 0,
              calc(100% - $step) 0,
              100% 50%,
              calc(100% - $step) 100%,
              0% 100%,
              $step 50%
            );
            display: flex;
            justify-content: start;
            align-items: center;
            color: #000;
          }
          .triangle:hover {
            padding: 5px 12px 5px 17px;
            margin-left: -2px;
            margin-right: -2px;
            background: #e6e6e6 !important;
          }
          .triangle:first-child:hover {
            margin-left: 0;
          }
          .triangle_last {
            cursor: default;
            color: #fff;
            background: rgba(27, 53, 70, 0.9) !important;
          }
          .triangle_last:hover {
            background: rgba(27, 53, 70, 0.8) !important;
          }
          .triangle_last:active {
            background: rgba(27, 53, 70, 0.6) !important;
          }
          .triangle:active {
            background: #d6d6d6;
          }

          .triangle:nth-child(3n + 1) {
            background: linear-gradient(
              45deg,
              hsl(0, 0%, 90%),
              hsl(0, 0%, 84%)
            );
          }
          .triangle:nth-child(3n + 2) {
            background: linear-gradient(
              45deg,
              hsl(0, 0%, 84%),
              hsl(0, 0%, 83%),
              hsl(0, 0%, 84%)
            );
          }
          .triangle:nth-child(3n + 3) {
            background: linear-gradient(
              45deg,
              hsl(0, 0%, 84%),
              hsl(0, 0%, 90%)
            );
          }
          .triangle:first-child {
            padding-left: 5px;
            -webkit-clip-path: polygon(
              0 0,
              calc(100% - $step) 0,
              100% 50%,
              calc(100% - $step) 100%,
              0% 100%
            );
            clip-path: polygon(
              0 0,
              calc(100% - $step) 0,
              100% 50%,
              calc(100% - $step) 100%,
              0% 100%
            );
          }
        }
        > .row {
          width: calc(100% - 30px);
          margin-bottom: 5px;
          @include font(400, 15px);

          .rows {
            display: flex;
            flex-direction: column;
            gap: 5px;
            width: calc(100% - 2px);
            padding: 15px;
            border: 1px solid #f1f1f1;
            .row {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: flex-end;
              height: 34px;
              .name {
                width: 40%;
              }
              .value {
                width: 60%;
              }
              .input {
                width: 60%;
                height: 90%;
                border: 1px solid #dbdedf;
                border-radius: 3px;
                padding: 8px 9px 7px;
                box-sizing: border-box;
                color: #313942;
                background: #fff;
                @include font(400, 15px);
                outline: 0;
                appearance: 0;
              }
              input::-webkit-outer-spin-button,
              input::-webkit-inner-spin-button {
                /* display: none; <- Crashes Chrome on hover */
                -webkit-appearance: none;
                margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
              }
            }
          }
          .footer {
            display: flex;
            justify-content: end;
            .btn1 {
              padding: 0 12px;
              height: 32px;
              color: #fff;
              background-color: #6c757d;
              background: linear-gradient(
                135deg,
                hsl(208, 7%, 66%),
                hsl(208, 7%, 58%),
                hsl(206, 7%, 50%)
              );
            }
            .btn1:hover {
              background-color: #5f676d;
              box-shadow: 0 0 5px 2px rgb(95 103 109 / 25%);
            }
          }
        }

        .grid {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 30px;
          @include font(400, 14px);
          .text {
            margin: 0 auto;
            @include font(500, 18px);
          }
          .card {
            min-width: 178px;
            width: calc(50% - 58px);
            border: 1px solid #c9c9c9;
            border-radius: 5px;
            padding: 20px;
            .rows::-webkit-scrollbar {
              display: none;
            }
            .rows {
              max-height: 220px;
              overflow: auto;
            }
            .row {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              border-bottom: 1px dotted #c9c9c9;
              padding-top: 5px;
              .name {
                max-width: 50%;
              }
              .value {
                text-align: end;
              }
              .value:first-child {
                display: none;
              }
            }
            .title {
              justify-content: center;
              @include font(500, 18px);
              padding: 20px 0;
              width: 100%;
              .name {
                display: none;
              }
              .value {
                text-align: center;
              }
            }
          }
        }
        .categories {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          .card {
            cursor: pointer;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 12px 18px;
            .row {
              width: 100%;
              .value {
                text-align: center;
              }
            }
            .title {
              padding: 0;
            }
            .row:first-child {
              border-bottom: none;
              height: 100%;
              .value {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2;
                -webkit-box-orient: vertical;
                min-height: 54px;
              }
            }
          }
        }
        .products {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          .card {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            .title {
              @include font(600, 20px);
            }
            .rows {
              width: 100%;
            }
          }
        }
        .card_footer {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 8px;
          align-items: flex-end;
          .input-select:deep(.item) {
            justify-content: flex-start;
            gap: 8px;
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
          .btn_del {
            white-space: nowrap;
            color: #fff;
            background-color: #a2a9ae;
          }
          .btn_del:hover {
            background-color: #929aa0;
            box-shadow: 0 0 5px 2px rgb(146 154 160 / 25%);
          }
        }
      }
    }
  }
}
.disable {
  pointer-events: none;
}
.rows-enter-active,
.rows-leave-active {
  transition: all 0.15s ease-out;
}
.rows-enter-from,
.rows-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}

.spinner {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
