import { usePreparationQueryParams } from "@/composables/preparationQueryParams";
import { BaseURL } from "@/composables/BaseURL";
const { preparation_params } = usePreparationQueryParams();

export default {
  state: {
    products: [],
  },
  getters: {},
  mutations: {
    updateProducts(state, value) {
      state.products = [...value];
    },
  },
  actions: {
    async getProductsAutocomplete(context, params) {
      const url = BaseURL + "get-products-autocomplete";
      const res = await fetch(url + preparation_params(params), {});
      const json = await res.json();
      return json;
    },
    async getProducts(context, params) {
      const url = BaseURL + "products";
      const res = await fetch(url + preparation_params(params), {});
      const json = await res.json();
      context.commit("updateProducts", json);
      return json;
    },
  },
};
