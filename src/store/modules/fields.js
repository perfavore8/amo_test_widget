import { usePreparationQueryParams } from "@/composables/preparationQueryParams";
import { BaseURL } from "@/composables/BaseURL";
import { amoWidjetSelf } from "@/main";
const { preparation_params } = usePreparationQueryParams();

export default {
  state: {
    fields: [],
  },
  getters: {},
  mutations: {
    updateFields(state, value) {
      state.fields = [...value];
    },
  },
  actions: {
    async getFields(context, params) {
      const url = BaseURL + "fields";
      if (process.env.NODE_ENV === "development") {
        const res = await fetch(url + preparation_params(params), {});
        const json = await res.json();
        context.commit("updateFields", json);
        return json;
      } else {
        amoWidjetSelf?.apiRequest(url, params, (res) => {
          console.log(res);
          context.commit("updateFields", res);
          return res;
        });
      }
    },
  },
};
