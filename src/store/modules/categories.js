import { usePreparationQueryParams } from "@/composables/preparationQueryParams";
import { BaseURL } from "@/composables/BaseURL";
import { amoWidjetSelf } from "@/main";
const { preparation_params } = usePreparationQueryParams();

export default {
  state: {
    categories: [],
    fields_properties: [],
  },
  getters: {},
  mutations: {
    updateCategories(state, value) {
      state.categories = [...value];
    },
    update_fields_properties(state, value) {
      state.fields_properties = [...value];
    },
  },
  actions: {
    async getCategories(context, params) {
      const url = BaseURL + "categories";
      let response = [];
      if (process.env.NODE_ENV === "development") {
        const res = await fetch(url + preparation_params(params), {});
        response = await res.json();
        context.commit("updateCategories", response);
      } else {
        delete params.account_id;
        delete params.user;
        amoWidjetSelf?.apiRequest("categories", params, (res) => {
          console.debug(res);
          response = res;
          context.commit("updateCategories", response);
        });
      }
      return response;
    },
    async get_fields_properties(context, params) {
      const url = BaseURL + "category/list";
      let response = [];
      if (process.env.NODE_ENV === "development") {
        const res = await fetch(url + preparation_params(params), {});
        response = await res.json();
        console.debug(response);
        context.commit("update_fields_properties", response);
      } else {
        delete params.account_id;
        delete params.user;
        amoWidjetSelf?.apiRequest("category/list", params, (res) => {
          response = res;
          console.debug(response);
          context.commit("update_fields_properties", response);
        });
      }
      return response;
    },
  },
};
