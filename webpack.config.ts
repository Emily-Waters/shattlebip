import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: { app: "./client/src/index.tsx", server: "./server/server.ts" },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  output: { path: path.join(__dirname, "dist"), filename: "[name].js" },
  mode: process.env.NODE_ENV || "development",
  target: "node",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "client/src", "index.html"),
    }),
  ],
};
