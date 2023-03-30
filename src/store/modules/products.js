import { usePreparationQueryParams } from "@/composables/preparationQueryParams";
import { BaseURL } from "@/composables/BaseURL";
import { amoWidjetSelf } from "@/main";
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
      if (process.env.NODE_ENV === "development") {
        const res = await fetch(url + preparation_params(params), {});
        const json = await res.json();
        return json;
      } else {
        amoWidjetSelf?.apiRequest(
          "get-products-autocomplete",
          params,
          (res) => {
            console.debug(res);
            return res;
          }
        );
      }
    },
    async getProducts(context, params) {
      const url = BaseURL + "products";
      if (process.env.NODE_ENV === "development") {
        const res = await fetch(url + preparation_params(params), {});
        const json = await res.json();
        context.commit("updateProducts", json);
        return json;
      } else {
        amoWidjetSelf?.apiRequest("products", params, (res) => {
          console.debug(res);
          context.commit("updateProducts", res);
          return res;
        });
      }
    },
  },
};
