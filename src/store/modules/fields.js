import { usePreparationQueryParams } from "@/composables/preparationQueryParams";
import { BaseURL } from "@/composables/BaseURL";
const { preparation_params } = usePreparationQueryParams();

export default {
  state: {
    fields: [],
  },
  getters: {},
  mutations: {
    updateFields(state, value) {
      state.products = [...value];
    },
  },
  actions: {
    async getFields(context, params) {
      const url = BaseURL + "fields";
      const res = await fetch(url + preparation_params(params), {});
      const json = await res.json();
      context.commit("updateFields", json);
      return json;
    },
  },
};
