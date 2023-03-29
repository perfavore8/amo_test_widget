console.debug(1);
import { createApp, h } from "vue";
// import { createApp } from "vue";
console.debug(2);
import App from "./App.vue";
console.debug(3);
import store from "./store";
console.debug(4);
import "@/tailwind.css";
console.debug(5);

// createApp(App).use(store).mount("#test");

const Widget = {
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

export default Widget;
