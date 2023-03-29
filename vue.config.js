const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  configureWebpack: {
    entry: ["./src/main.js"],
    mode: "production",
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "./dist"),
      publicPath: "/",
      filename: "[name].js",
      libraryTarget: "amd",
    },
  },
});
