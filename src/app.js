import App from "./App.vue";
import store from "./stores/index";
import { createApp, h } from "vue";

console.log("123");
const Widget = {
  render(self, el) {
    self.showProductsSearch((accountID, el) => {
      console.log(accountID, el);

      const app = createApp({
        render: () => h(App),
      });
      app.use(store);
      app.mount(el);
    });

    return true;
  },

  init() {
    console.debug("oneDocs init");
    return true;
  },

  bind_actions() {
    console.debug("oneDocs bind_actions");
    return true;
  },

  settings(el) {
    console.debug("oneDocs settings");
  },

  onSave() {},

  destroy() {},

  contacts_selected() {},

  leads_selected() {},

  tasks_selected() {},
};

export default Widget;
