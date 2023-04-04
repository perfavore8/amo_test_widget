import { usePreparationQueryParams } from "@/composables/preparationQueryParams";
import { BaseURL } from "@/composables/BaseURL";
import { amoWidjetSelf } from "@/main";
const { preparation_params } = usePreparationQueryParams();

export default {
  state: {
    fields: [],
    all_fields: [],
    tableConfig: {},
  },
  getters: {},
  mutations: {
    updateFields(state, value) {
      state.fields = [...value];
    },
    updateTableConfig(state, value) {
      state.tableConfig = { ...value };
    },
    update_all_fields(state, value) {
      const list = value.sort((a, b) => {
        if (state.tableConfig[a.code]?.sort > state.tableConfig[b.code]?.sort)
          return 1;
        if (state.tableConfig[a.code]?.sort == state.tableConfig[b.code]?.sort)
          return 0;
        if (state.tableConfig[a.code]?.sort < state.tableConfig[b.code]?.sort)
          return -1;
      });
      state.all_fields = [...list];
    },
  },
  actions: {
    async getFields(context, params) {
      const url = BaseURL + "fields";
      let response = [];
      if (process.env.NODE_ENV === "development") {
        const res = await fetch(url + preparation_params(params), {});
        response = await res.json();
        context.commit("updateFields", response);
      } else {
        delete params.account_id;
        delete params.user;
        amoWidjetSelf?.apiRequest("fields", params, (res) => {
          response = res;
          context.commit("updateFields", response);
        });
      }
      return response;
    },
    async getAllFields(context, params) {
      const url = BaseURL + "fields/all";
      let response = [];
      if (process.env.NODE_ENV === "development") {
        const res = await fetch(url + preparation_params(params), {});
        response = await res.json();
        context.commit("update_all_fields", response);
      } else {
        delete params.account_id;
        delete params.user;
        amoWidjetSelf?.apiRequest("fields/all", params, (res) => {
          response = res;
          context.commit("update_all_fields", response);
        });
      }
      return response;
    },
    async getTableConfig(context, params) {
      const url = BaseURL + "products/filtered/config";
      let response = [];
      if (process.env.NODE_ENV === "development") {
        const res = await fetch(url + preparation_params(params), {});
        response = await res.json();
        context.commit("updateTableConfig", response?.table);
      } else {
        delete params.account_id;
        delete params.user;
        amoWidjetSelf?.apiRequest("products/filtered/config", params, (res) => {
          response = res;
          context.commit("updateTableConfig", response?.table);
        });
      }
      return response;
    },
  },
};
