<template>
  <div class="filter" v-if="item.type == 7">
    <input type="date" v-model="date_start" />
    <input type="date" v-model="date_end" />
  </div>
  <div class="filter" v-if="item.type == 8">
    <input type="datetime-local" v-model="date_start" />
    <input type="datetime-local" v-model="date_end" />
  </div>
</template>

<script>
import { ref, onMounted, nextTick, watch, computed } from "vue";

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
  emits: {
    change_filter_value: null,
  },
  setup(props, { emit }) {
    const date_start = ref("");
    const date_end = ref("");

    const date = computed(() => {
      return { value: `${date_start.value}~${date_end.value}` };
    });

    function emit_value() {
      emit("change_filter_value", date.value, props.idx);
    }

    function change_value() {
      if (props.item.value) {
        const [start, end] = props.item.value.split("~");
        date_start.value = start;
        date_end.value = end;
      } else {
        date_start.value = "";
        date_end.value = "";
      }
    }

    onMounted(() => {
      nextTick(() => {
        change_value();
      });
    });

    watch(
      () => props.item.value,
      () => {
        change_value();
      }
    );
    watch(date, () => emit_value());

    return {
      date_start,
      date_end,
      emit_value,
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
  max-width: 130px;
  min-width: 50px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0 auto;
  input {
    position: relative;
    width: 100%;
    height: 27px;
    background: white;
    border: 0.5px solid #c4c4c4;
    border-radius: 4px;
    color: #3f3f3f;
    outline: none;
    @include font(400, 14px, 17px);
  }
  input::-webkit-datetime-edit-fields-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  input::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    appearance: none;
  }
}
</style>
