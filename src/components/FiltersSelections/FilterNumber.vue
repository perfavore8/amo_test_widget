<template>
  <div class="filter">
    <button @click="option == 4 ? (option = 0) : (option += 1)">
      <span :class="{ big: option == 0 }">{{ options[option] }}</span>
    </button>
    <input v-model="filterValue" type="number" />
  </div>
</template>

<script>
import { nextTick } from "vue";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      option: 0,
      filterValue: null,
      options: ["=", ">", ">=", "<", "<="],
    };
  },
  computed: {
    option_value() {
      return {
        option: this.options[this.option],
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
        this.filterValue = this.item.value;
        if (this.item.value == null) this.option = 0;
      });
    },
    emit_value() {
      this.$emit("change_filter_value", this.option_value, this.idx);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/app.scss";
.filter {
  max-width: 80%;
  min-width: 50px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 69px;
    height: 27px;
    background: #757575;
    border-radius: 4px;
    border: none;
    z-index: 2;
    cursor: pointer;

    > span {
      @include font(400, 14px, 1);
      color: white;
    }
    .big {
      @include font(400, 20px, 1);
    }
  }
  > input {
    width: 100%;
    height: 27px;
    background: #ffffff;
    border: 0.5px solid #c4c4c4;
    border-radius: 4px;
    margin-left: -5px;
    padding-left: 7px;
    @include font(400, 14px, 17px);
    outline: none;
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
}
</style>
