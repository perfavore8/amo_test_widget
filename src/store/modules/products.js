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
    productsParams: {
      page: 1,
      filter: {},
      sort: {},
      per_page: 20,
    },
  },
  getters: {},
  mutations: {
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
    updateProductsParams(state, params) {
      Object.assign(state.productsParams, params);
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
            console.debug("123", response);
            context.commit("updateProductsAutocomplete", response);
            resolve(response);
          } else {
            delete params.account_id;
            delete params.user;
            amoWidjetSelf?.apiRequest(
              "get-products-autocomplete",
              params,
              async (res) => {
                console.debug(res, Array.isArray(res));
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
              console.debug(res);
              context.commit("updateProducts", res);
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
            console.debug(response);
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
                console.debug(response);
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
      const url = BaseURL + "add-product";
      let response = [];
      if (process.env.NODE_ENV === "development") {
        const res = await fetch(url + preparation_params(params));
        response = await res.json();
        console.debug(response);
      } else {
        delete params.account_id;
        delete params.user;
        amoWidjetSelf?.addProduct(
          amoWidjetSelf?.AMOCRM?.data?.current_card?.id,
          params.productId
        );
      }
      return response;
    },
    async addProduct2(context, params) {
      const url = BaseURL + "add-product-v2";
      let response = [];
      if (process.env.NODE_ENV === "development") {
        const res = await fetch(url + preparation_params(params));
        response = await res.json();
        console.debug(response);
      } else {
        delete params.account_id;
        delete params.user;
        amoWidjetSelf?.addProduct2(
          amoWidjetSelf?.AMOCRM?.data?.current_card?.id,
          params.productId,
          params.count
        );
      }
      return response;
    },
  },
};
