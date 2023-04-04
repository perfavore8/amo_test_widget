import { usePreparationQueryParams } from "@/composables/preparationQueryParams";
import { BaseURL } from "@/composables/BaseURL";
import { amoWidjetSelf } from "@/main";
const { preparation_params } = usePreparationQueryParams();

export default {
  state: {
    categories: [],
    fields_properties: [],
    fields_properties2: [],
  },
  getters: {},
  mutations: {
    updateCategories(state, value) {
      state.categories = [...value];
    },
    update_fields_properties(state, value) {
      state.fields_properties = [...value];
    },
    update_fields_properties2(state, value) {
      state.fields_properties2 = [...value];
    },
  },
  actions: {
    async getCategories(context, params) {
      const myPromise = await new Promise((resolve) => {
        const url = BaseURL + "categories";
        let response = [];
        (async () => {
          if (process.env.NODE_ENV === "development") {
            const res = await fetch(url + preparation_params(params), {});
            response = await res.json();
            context.commit("updateCategories", response);
            resolve(response);
          } else {
            delete params.account_id;
            delete params.user;
            amoWidjetSelf?.apiRequest("categories", params, async (res) => {
              response = await res;
              context.commit("updateCategories", response);
              resolve(response);
            });
          }
        })();
      });
      return myPromise;
    },
    async get_fields_properties(context, params) {
      const url = BaseURL + "category/list";
      let response = [];
      if (process.env.NODE_ENV === "development") {
        const res = await fetch(url + preparation_params(params), {});
        response = await res.json();
        context.commit("update_fields_properties", response);
      } else {
        delete params.account_id;
        delete params.user;
        amoWidjetSelf?.apiRequest("category/list", params, (res) => {
          response = res;
          context.commit("update_fields_properties", response);
        });
      }
      return response;
    },
    async get_fields_properties2(context, params) {
      const url = BaseURL + "categories/list";
      let response = [];
      if (process.env.NODE_ENV === "development") {
        const res = await fetch(url + preparation_params(params), {});
        response = await res.json();
        context.commit("update_fields_properties2", response);
      } else {
        delete params.account_id;
        delete params.user;
        amoWidjetSelf?.apiRequest("categories/list", params, (res) => {
          response = res;
          context.commit("update_fields_properties2", response);
        });
      }
      return response;
    },
  },
};
