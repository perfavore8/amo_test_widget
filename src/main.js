import { createApp, h } from "vue";
import App from "./App.vue";
import store from "./store";

// createApp(App).use(store).mount("#app");

const Widget = {
  // eslint-disable-next-line no-unused-vars
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

  settings() {
    console.debug("oneDocs settings");
  },

  onSave() {},

  destroy() {},

  contacts_selected() {},

  leads_selected() {},

  tasks_selected() {},
};

export default Widget;
