<template>
  <div class="sls_grid">
    <div
      @click="prev()"
      v-if="page.current != page.first && page.prev != null"
      class="a sls_pag_btn"
    >
      {{ "<" }}
    </div>
    <div
      @click="first()"
      v-if="page.current != page.first && page.prev != page.first"
      class="b sls_pag_btn"
    >
      {{ page.first }}
    </div>
    <div
      @click="prev()"
      v-if="page.current != page.first && page.prev != null"
      class="c sls_pag_btn"
    >
      {{ page.prev }}
    </div>
    <div class="current d sls_pag_btn">{{ page.current }}</div>
    <div
      @click="next()"
      v-if="page.current != page.last && page.next != null"
      class="e sls_pag_btn"
    >
      {{ page.next }}
    </div>
    <div
      @click="last()"
      v-if="page.current != page.last && page.next != page.last"
      class="f sls_pag_btn"
    >
      {{ page.last }}
    </div>
    <div
      @click="next()"
      v-if="page.current != page.last && page.next != null"
      class="g sls_pag_btn"
    >
      {{ ">" }}
    </div>
  </div>
</template>

<script>
export default {
  props: { page: Object },
  emits: {
    changePage(payload) {
      return payload > 0 && typeof payload === "number";
    },
  },
  setup(props, context) {
    const first = () => context.emit("changePage", props.page.first);
    const prev = () => context.emit("changePage", props.page.current - 1);
    const next = () => context.emit("changePage", props.page.current + 1);
    const last = () => context.emit("changePage", props.page.last);

    return { prev, first, next, last };
  },
};
</script>

<style lang="scss" scoped>
.sls_pag_btn {
  cursor: pointer;
  min-width: 32px;
  height: 32px;
  border-radius: 0.375rem;
  background-color: rgb(241, 245, 249);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  outline-color: #cbd5e1;
  border: none;
}
.sls_pag_btn:hover {
  background-color: rgb(226 232 240);
}
.sls_grid {
  display: grid;
  gap: 0.75rem;
  grid-template-areas: "a b c d e f g";
  grid-template-columns: repeat(7, 1fr);
}
.a {
  grid-area: a;
}
.b {
  grid-area: b;
}
.c {
  grid-area: c;
}
.d {
  grid-area: d;
}
.e {
  grid-area: e;
}
.f {
  grid-area: f;
}
.g {
  grid-area: g;
}
.current {
  background-color: rgb(226 232 240);
}
</style>
