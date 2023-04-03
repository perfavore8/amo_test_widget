import { createApp, h } from "vue";
import App from "./App.vue";
import store from "./store";
// import "@/tailwind.css";
// import "material-icons/iconfont/material-icons.css";

export let amoWidjetSelf = null;

const WidgetVueProductsSearch = {
  render(self) {
    amoWidjetSelf = self;

    self.showProductsSearch((el) => {
      const app = createApp({
        render: () => h(App),
      });
      app.use(store);
      app.mount(el);
    });

    self.apiRequest("fields", { category_id: 0 }, (res) => {
      console.debug(res);
    });

    return true;
  },

  init() {
    return true;
  },

  bind_actions() {
    return true;
  },

  settings() {},

  onSave() {},

  destroy() {},

  contacts_selected() {},

  leads_selected() {},

  tasks_selected() {},
};

// window.WidgetVueProductsSearch = WidgetVueProductsSearch;

if (process.env.NODE_ENV !== "development") {
  // eslint-disable-next-line no-undef
  $("body").data("WidgetVueProductsSearch", WidgetVueProductsSearch);
}

export default WidgetVueProductsSearch;

createApp(App).use(store).mount("#test");
