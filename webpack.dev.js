// node.jsのインポート文
const path = require("path");

// node.jsのエクスポート文
module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/"
  },
  devtool: "inline-source-map",
  module: {
    rules: [{
      test: /\.ts$/,
      use: "ts-loader",
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
}
