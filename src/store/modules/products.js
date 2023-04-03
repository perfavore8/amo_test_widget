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
      const url = BaseURL + "get-products-autocomplete";
      let response = [];
      if (process.env.NODE_ENV === "development") {
        const res = await fetch(url + preparation_params(params), {});
        response = await res.json();
        console.debug("123", response);
        context.commit("updateProductsAutocomplete", response);
      } else {
        delete params.account_id;
        delete params.user;
        console.debug(
          "debug",
          amoWidjetSelf?.apiRequest(
            "get-products-autocomplete",
            params,
            (res) => {
              console.debug("debug", res, Array.isArray(res));
              response = res;
              context.commit("updateProductsAutocomplete", response);
            }
          )
        );
        await amoWidjetSelf?.apiRequest(
          "get-products-autocomplete",
          params,
          (res) => {
            console.debug(res, Array.isArray(res));
            response = res;
            context.commit("updateProductsAutocomplete", response);
          }
        );
      }
      return response;
    },
    async getProducts(context, params) {
      const url = BaseURL + "products";
      let response = [];
      if (process.env.NODE_ENV === "development") {
        const res = await fetch(url + preparation_params(params), {});
        response = await res.json();
        context.commit("updateProducts", response);
      } else {
        delete params.account_id;
        delete params.user;
        amoWidjetSelf?.apiRequest("products", params, (res) => {
          console.debug(res);
          context.commit("updateProducts", res);
          response = res;
        });
      }
      return response;
    },
    async getAllProducts(context, params) {
      const url = BaseURL + "products/filtered";
      let response = [];
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
      } else {
        delete params.account_id;
        delete params.user;
        amoWidjetSelf?.apiRequest("products/filtered", params, (res) => {
          response = res;
          console.debug(response);
          context.commit("updateAllProducts", response.data);
          context.commit("update_meta", {
            links: response.links,
            meta: response.meta,
          });
        });
      }
      return response;
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
