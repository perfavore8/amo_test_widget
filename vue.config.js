const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.output.filename("[name].js");
  },
});
