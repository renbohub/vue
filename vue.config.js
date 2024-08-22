console.log("vue.config.js");
const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({

  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: "system",
      filename: "js/[name].js",
      chunkFilename: "js/[name].js",
    },
    devServer: {
      proxy: 'http://localhost:3001'
    },
  },
  lintOnSave: false,
});
