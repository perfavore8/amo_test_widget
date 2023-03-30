import { createApp, h } from "vue";
import App from "./App.vue";
import store from "./store";
import "@/tailwind.css";
import "material-icons/iconfont/material-icons.css";

createApp(App).use(store).mount("#test");

const WidgetVueProductsSearch = {
  render(self) {
    self.showProductsSearch((el) => {
      const app = createApp({
        render: () => h(App),
      });
      app.use(store);
      app.mount(el);
    });

    self.apiRequest(
      "https://api.gosklad.ru/widget/fields",
      { category_id: 0 },
      (res) => {
        console.log(res);
      }
    );

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

window.WidgetVueProductsSearch = WidgetVueProductsSearch;

export default WidgetVueProductsSearch;
