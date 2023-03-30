import { usePreparationQueryParams } from "@/composables/preparationQueryParams";
import { BaseURL } from "@/composables/BaseURL";
const { preparation_params } = usePreparationQueryParams();

export default {
  state: {
    categories: [],
  },
  getters: {},
  mutations: {
    updateCategories(state, value) {
      state.categories = [...value];
    },
  },
  actions: {
    async getCategories(context, params) {
      const url = BaseURL + "categories";
      const res = await fetch(url + preparation_params(params), {});
      const json = await res.json();
      context.commit("updateCategories", json);
      return json;
    },
  },
};
