import { createApp, h } from "vue";
// import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "@/tailwind.css";

// createApp(App).use(store).mount("#test");

const WidgetVueProductsSearch = {
  render(self) {
    console.debug(6);
    self.showProductsSearch((el) => {
      const app = createApp({
        render: () => h(App),
      });
      app.use(store);
      app.mount(el);
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

window.WidgetVueProductsSearch = WidgetVueProductsSearch;

export default WidgetVueProductsSearch;
