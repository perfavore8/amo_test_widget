<template>
  <div class="wrapper">
    <div class="filters">
      <div class="item">
        <selector-vue
          :options_props="filteredFiltersValue"
          :selected_option="{ name: 'Добавить фильтр', value: -1 }"
          @select="add_filter"
        />
      </div>
      <template v-for="(filter, idx) in filtersValue" :key="idx">
        <div class="item" v-if="filter.selected">
          <div class="title">
            {{ filter.name }}
          </div>
          <filter-number
            v-if="filter.type == 1 || filter.type == 2"
            :item="filter"
            :idx="idx"
            @change_filter_value="change_filter_value"
          />
          <filter-text
            v-if="filter.type == 3 || filter.type == 4"
            :item="filter"
            :idx="idx"
            @change_filter_value="change_filter_value"
          />
          <filter-list
            v-if="filter.type == 5 || filter.type == 6"
            :item="filter"
            :idx="idx"
            :selector_options="filter.selector_options"
            @change_filter_value="change_filter_value"
          />
          <filter-list
            v-if="filter.type == 12"
            :item="filter"
            :idx="idx"
            :selector_options="categories_options"
            @change_filter_value="change_filter_value"
          />
          <filter-date
            v-if="filter.type == 7 || filter.type == 8"
            :item="filter"
            :idx="idx"
            @change_filter_value="change_filter_value"
          />
          <filter-flag
            v-if="filter.type == 9"
            :item="filter"
            :idx="idx"
            @change_filter_value="change_filter_value"
          />
          <button class="sls_remove" @click="remove_filter(filter)">
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
      </template>
    </div>
    <div class="accept_btn">
      <button @click="clearFilters()" class="btn1 sls_btn">Очистить</button>
      <button @click="confirmFilters()" class="btn2 sls_btn">Применить</button>
    </div>
  </div>
</template>

<script>
import FilterNumber from "@/components/FiltersSelections/FilterNumber.vue";
import FilterText from "@/components/FiltersSelections/FilterText.vue";
import FilterList from "@/components/FiltersSelections/FilterList.vue";
import FilterDate from "@/components/FiltersSelections/FilterDate.vue";
import FilterFlag from "@/components/FiltersSelections/FilterFlag.vue";
import SelectorVue from "./SelectorVue.vue";
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
  components: {
    FilterNumber,
    FilterText,
    FilterList,
    FilterDate,
    FilterFlag,
    SelectorVue,
  },
  data() {
    return {
      filtersValue: [],
      categories_options: [],
      isConfirmFilters: false,
      filter: {},
    };
  },
  computed: {
    productsParams() {
      return this.$store.state.products.productsParams;
    },
    filteredFiltersValue() {
      return this.filtersValue.filter((val) => !val.selected);
    },
  },
  async mounted() {
    Promise.all([
      this.$store.dispatch("get_fields_properties", {
        account_id: 30214471,
      }),
      this.$store.dispatch("get_fields_properties2", {
        account_id: 30214471,
      }),
    ]);
    this.get_categories_options();
    this.feelFilters();
  },
  watch: {
    sortedFields: {
      handler: function () {
        this.feelFilters();
      },
      deep: true,
    },
  },
  methods: {
    add_filter(option) {
      option.selected = true;
    },
    remove_filter(option) {
      option.selected = false;
      let value = null;
      if (option.type == 5 || option.type == 6) {
        value = [];
      }
      if (option.type == 9) {
        value = 1;
      }
      if (option.type == 12) {
        value = [];
      }
      option.value = value;
      this.confirmFilters();
    },
    searchTitle(code) {
      let res = "";
      const [first, second] = code.split(".");
      res = this.fields.find((field) => field.code === first)?.name;
      if (second === "count") res = res + ": на складе";
      if (second === "reserve") res = res + ": в резерве";
      if (second === "is_nds") res = res + ": с НДС";
      if (second === "is_price_include_nds") res = res + ": НДС включен в цену";
      if (second === "nds") res = res + ": НДС %";
      return res;
    },
    clearFilters() {
      this.feelFilters();
      this.confirmFilters();
    },
    confirmFilters() {
      this.isConfirmFilters = true;
      const filter = {};
      this.filtersValue
        .filter((val) => val.value != null && val.value !== "" && val.selected)
        .forEach((val) => {
          if (val.type == 1 || val.type == 2)
            filter[val.code] = {
              compare: val.option,
              query: val.value,
            };
          if (val.type == 3 || val.type == 4)
            filter[val.code] = {
              compare: val.option,
              query: val.value,
            };
          if (val.type == 5 || val.type == 6 || val.type == 12)
            if (val.value?.length)
              filter[val.code] = {
                compare: "in",
                query: val.value,
              };
          if (val.type == 7) {
            const date = val.value.split("~");
            date.forEach((val, idx) => (date[idx] = val.split("-").join(".")));
            filter[val.code] = {
              from: date[0],
              to: date[1],
            };
          }
          if (val.type == 8) {
            const date = val.value.split("~");
            date.forEach((val, idx) => {
              const split = val.split("T");
              split[0] = split[0].split("-").join(".");
              date[idx] = split.join(" ");
            });
            filter[val.code] = {
              from: date[0],
              to: date[1],
            };
          }
        });
      this.filter = filter;
      this.$store.commit("updateProductsParams", { filter: filter, page: 1 });
      this.$emit("confirm");
    },
    change_filter_value(new_obj, idx) {
      Object.assign(this.filtersValue[idx], new_obj);
    },
    setFalseIsConfirmFilters() {
      this.isConfirmFilters = false;
    },
    setTrueIsConfirmFilters() {
      this.isConfirmFilters = true;
    },
    feelFilters() {
      this.filtersValue = [];
      const copyFields = [];
      this.sortedFields.forEach((val) => {
        let item = {};
        item = {
          ...this.fields.filter((value) => {
            return value.code.split(".")[0] == val[0].split(".")[0];
          })[0],
        };
        item.type = val[1].type;
        item.code = val[0];

        copyFields.push(item);
      });
      copyFields.forEach((val) => {
        const preparation_data = (arr) => {
          const result = [];
          if (arr != null)
            arr.forEach((val, idx) => result.push({ name: val, value: idx }));
          return result;
        };
        let value = null;
        if (val.type == 5 || val.type == 6) {
          value = [];
        }
        if (val.type == 9) {
          value = 1;
        }
        if (val.type == 12) {
          value = [];
        }
        const obj = {
          type: val.type,
          code: val.code,
          option: "=",
          selector_options: preparation_data(val.data),
          value: value,
          table_config: val.table_config,
          selected: false,
          name: this.searchTitle(val.code),
        };
        this.filtersValue.push(obj);
      });
    },
    get_categories_options() {
      this.$store.state.categories.fields_properties2.forEach((val) => {
        let spaces = "";
        for (let i = 1; i < val.level; i++) spaces = spaces + "-    ";
        this.categories_options.push({
          name: spaces + val.name,
          value: val.id,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/app.scss";
* {
  box-sizing: border-box;
}
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 12px;
}
.filters {
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  flex-wrap: wrap;
  gap: 5px;
  // background-color: rgba(0, 0, 0, 0.05);
  .item {
    .v-select {
      margin-right: 30px;
      width: 300px;
      min-width: 300px;
    }
    // max-width: 23%;
    // width: min-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    // justify-content: space-between;
    // flex-grow: 1;
    // border: 1px solid #c9c9c9;
    // border-radius: 5px;
    padding: 12px 5px;
    height: 52px;
    background-color: #fff;
    gap: 5px;
    .title {
      @include font(500, 16px, 19px);
    }
    .sls_remove {
      background: transparent;
      border-radius: 0 5px 5px 0;
      height: 16px;
      width: 16px;
      z-index: 5;
      /* margin: 0 auto; */
      cursor: pointer;
      border: none;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease-out;
      /* margin: 0; */
      /* margin-right: -10px; */
      padding: 0;
      position: absolute;
      right: 6px;
      top: 19px;
      > svg {
        filter: invert(48%) sepia(2%) saturate(15%) hue-rotate(4deg)
          brightness(94%) contrast(88%);
      }
    }
  }
  .item:deep(.filter) {
    min-width: 80px;
    width: min-content;
    // max-width: none;
  }
}
.accept_btn {
  margin: 12px;
  text-align: right;
  display: flex;
  flex-direction: row;
  gap: 10px;
  .btn1 {
    color: white;
    width: 130px;
    background: linear-gradient(
      135deg,
      hsl(208, 7%, 52%),
      hsl(208, 7%, 46%),
      hsl(206, 7%, 40%)
    );
  }
  .btn1:hover {
    background-color: #5f676d;
    box-shadow: 0 0 5px 2px rgb(95 103 109 / 25%);
  }
  .btn2 {
    color: white;
    width: 130px;
    background-color: #6c757d;
    background: linear-gradient(
      135deg,
      hsl(208, 7%, 52%),
      hsl(208, 7%, 46%),
      hsl(206, 7%, 40%)
    );
  }
  .btn2:hover {
    box-shadow: 0 0 5px 2px rgb(2 86 212 / 25%);
  }
}
</style>
