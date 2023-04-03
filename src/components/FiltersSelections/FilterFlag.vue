<template>
  <div class="filter">
    <selector-vue
      :options_props="options"
      @select="option_select"
      :selected_option="options[filterValue - 1]"
    />
  </div>
</template>

<script>
import { computed, nextTick, ref, watch } from "vue";
import SelectorVue from "@/components/SelectorVue.vue";

export default {
  components: {
    SelectorVue,
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
  },
  setup(props, { emit }) {
    const options = ref([
      { name: "Все", value: 1 },
      { name: "Да", value: 2 },
      { name: "Нет", value: 3 },
    ]);
    const filterValue = ref(1);

    const option_value = computed(() => {
      return { value: filterValue.value };
    });

    watch(
      option_value,
      () => {
        emit("change_filter_value", option_value.value, props.idx);
      },
      { deep: true }
    );

    const change_value = () => {
      nextTick(() => {
        filterValue.value = props.item.value;
      });
    };

    const option_select = (option) => {
      filterValue.value = option.value;
    };

    watch(() => props.item, change_value);

    change_value();

    return {
      options,
      filterValue,
      option_value,
      option_select,
    };
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
  flex-direction: row;
  margin: 0 auto;
}
</style>
