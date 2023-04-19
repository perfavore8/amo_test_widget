import { usePreparationQueryParams } from "@/composables/preparationQueryParams";
import { BaseURL } from "@/composables/BaseURL";
import { amoWidjetSelf } from "@/main";
import { usePreparationProducts } from "@/composables/preparationProducts";
const { preparationProducts } = usePreparationProducts();
const { preparation_params } = usePreparationQueryParams();

export default {
  state: {
    products: [],
    productsAutocomplete: [],
    allProducts: [],
    meta: {
      links: {},
      meta: {},
    },
    meta2: {
      links: {},
      meta: {},
    },
    productsParams: {
      page: 1,
      filter: {},
      sort: {},
      per_page: 20,
    },
    productsParams2: {
      page: 1,
      per_page: 12,
    },
    selectedWirePerLead: { sources: [], value: null },
    disableAddToDeal: false,
  },
  getters: {},
  mutations: {
    updateDisableAddToDeal(state, value) {
      state.disableAddToDeal = value;
    },
    updateProducts(state, value) {
      state.products = [...value];
    },
    updateProductsAutocomplete(state, value) {
      state.productsAutocomplete = [...value];
    },
    updateAllProducts(state, value) {
      state.allProducts = [...preparationProducts(value)];
    },
    update_meta(state, value) {
      state.meta = { ...value };
    },
    update_meta2(state, value) {
      state.meta2 = { ...value };
    },
    updateProductsParams(state, params) {
      Object.assign(state.productsParams, params);
    },
    updateProductsParams2(state, params) {
      Object.assign(state.productsParams2, params);
    },
    updateSelectedWirePerLead(state, params) {
      const noOneSources = state.selectedWirePerLead.sources.length == 0;
      const haveThisSource = state.selectedWirePerLead.sources.includes(
        params.source
      );
      const onlyThisSource =
        haveThisSource && state.selectedWirePerLead.sources.length == 1;
      const sameValue = state.selectedWirePerLead.value === params.value;
      if (noOneSources && params.value) {
        state.selectedWirePerLead = {
          sources: [params.source],
          value: params.value,
        };
      } else if (onlyThisSource) {
        if (!params.value) {
          state.selectedWirePerLead = { sources: [], value: null };
        } else {
          state.selectedWirePerLead.value = params.value;
        }
      } else if (!haveThisSource && sameValue && params.value) {
        state.selectedWirePerLead = {
          sources: [...state.selectedWirePerLead.sources, params.source],
          value: params.value,
        };
      } else if (haveThisSource && !params.value) {
        state.selectedWirePerLead.sources =
          state.selectedWirePerLead.sources.filter(
            (source) => source != params.source
          );
      }
    },
  },
  actions: {
    async getProductsAutocomplete(context, params) {
      const myPromise = await new Promise((resolve) => {
        const url = BaseURL + "get-products-autocomplete";
        let response = [];
        (async () => {
          if (process.env.NODE_ENV === "development") {
            const res = await fetch(url + preparation_params(params), {});
            response = await res.json();
            context.commit("updateProductsAutocomplete", response);
            resolve(response);
          } else {
            delete params.account_id;
            delete params.user;
            amoWidjetSelf?.apiRequest(
              "get-products-autocomplete",
              params,
              async (res) => {
                response = await res;
                context.commit("updateProductsAutocomplete", response);
                resolve(response);
              }
            );
          }
        })();
      });
      return myPromise;
    },
    async getProducts(context, params) {
      const myPromise = await new Promise((resolve) => {
        const url = BaseURL + "products";
        let response = [];
        (async () => {
          if (process.env.NODE_ENV === "development") {
            const res = await fetch(url + preparation_params(params), {});
            response = await res.json();
            context.commit("updateProducts", response);
            resolve(response);
          } else {
            delete params.account_id;
            delete params.user;
            amoWidjetSelf?.apiRequest("products", params, async (res) => {
              context.commit("updateProducts", res);
              response = await res;
              resolve(response);
            });
          }
        })();
      });
      return myPromise;
    },
    async getProducts2(context, params) {
      const myPromise = await new Promise((resolve) => {
        const url = BaseURL + "products-v2";
        let response = [];
        (async () => {
          if (process.env.NODE_ENV === "development") {
            const res = await fetch(url + preparation_params(params), {});
            response = await res.json();
            context.commit("updateProducts", response.data);
            context.commit("update_meta2", {
              meta: response.meta,
              links: response.links,
            });
            resolve(response);
          } else {
            delete params.account_id;
            delete params.user;
            amoWidjetSelf?.apiRequest("products-v2", params, async (res) => {
              context.commit("updateProducts", response.data);
              context.commit("update_meta2", {
                meta: response.meta,
                links: response.links,
              });
              response = await res;
              resolve(response);
            });
          }
        })();
      });
      return myPromise;
    },
    async getAllProducts(context, params) {
      const myPromise = await new Promise((resolve) => {
        const url = BaseURL + "products/filtered";
        let response = [];
        (async () => {
          if (process.env.NODE_ENV === "development") {
            const res = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(params),
            });
            response = await res.json();
            context.commit("updateAllProducts", response.data);
            context.commit("update_meta", {
              links: response.links,
              meta: response.meta,
            });
            resolve(response);
          } else {
            delete params.account_id;
            delete params.user;
            delete params.leadId;
            params.leadId = amoWidjetSelf?.AMOCRM.data.current_card.id;
            amoWidjetSelf?.apiRequest(
              "products/filtered",
              params,
              async (res) => {
                response = await res;
                context.commit("updateAllProducts", response.data);
                context.commit("update_meta", {
                  links: response.links,
                  meta: response.meta,
                });
                resolve(response);
              }
            );
          }
        })();
      });
      return myPromise;
    },
    async addProduct(context, params) {
      context.commit("updateDisableAddToDeal", true);
      const myPromise = await new Promise((resolve) => {
        const url = BaseURL + "add-product";
        let response = [];
        (async () => {
          if (process.env.NODE_ENV === "development") {
            response = await fetch(url + preparation_params(params));
            context.commit("updateDisableAddToDeal", false);
            resolve(response);
          } else {
            delete params.account_id;
            delete params.user;
            amoWidjetSelf?.addProduct(
              amoWidjetSelf?.AMOCRM?.data?.current_card?.id,
              params.productId,
              () => {
                context.commit("updateDisableAddToDeal", false);
                resolve(response);
              }
            );
          }
        })();
      });
      return myPromise;
    },
    async addProduct2(context, params) {
      context.commit("updateDisableAddToDeal", true);
      const myPromise = await new Promise((resolve) => {
        const url = BaseURL + "add-product-v2";
        let response = [];
        (async () => {
          if (process.env.NODE_ENV === "development") {
            response = await fetch(url + preparation_params(params));
            context.commit("updateDisableAddToDeal", false);
            resolve(response);
          } else {
            delete params.account_id;
            delete params.user;
            amoWidjetSelf?.addProduct2(
              amoWidjetSelf?.AMOCRM?.data?.current_card?.id,
              params.productId,
              params.count,
              () => {
                context.commit("updateDisableAddToDeal", false);
                resolve(response);
              }
            );
          }
        })();
      });
      return myPromise;
    },
    async addProduct3(context, params) {
      context.commit("updateDisableAddToDeal", true);
      const myPromise = await new Promise((resolve) => {
        const url = BaseURL + "add-product-v3";
        let response = [];
        (async () => {
          if (process.env.NODE_ENV === "development") {
            response = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(params),
            });
            context.commit("updateDisableAddToDeal", false);
            resolve(response);
          } else {
            delete params.account_id;
            delete params.user;
            amoWidjetSelf?.addProduct3(
              amoWidjetSelf?.AMOCRM?.data?.current_card?.id,
              params.products,
              () => {
                context.commit("updateDisableAddToDeal", false);
                resolve(response);
              }
            );
          }
        })();
      });
      return myPromise;
    },
  },
};
