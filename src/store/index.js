import { createStore } from "vuex";
import data from "./modules/data";
import categories from "./modules/categories";
import products from "./modules/products";
import fields from "./modules/fields";

export default createStore({
  modules: { data, categories, products, fields },
});
