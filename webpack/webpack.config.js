const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Defines the entry point for the application to be ./src/index.tsx
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    // Allows you to write import statements without using .tsx, .ts and .js
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      // Tells webpack to use babel to trnaspile all .ts, .tsx, .js and .jsx files
      {
        test: /\.(ts|js)x?$/,
        // Tells webpack to ignore the /node_modules folder for transpilation
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      // Tells webpack to use style-loader and css-loader to load all .css files
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      // Tells webpack to use its built-in asset/resource to load all .ico, .gif, .png, .jpg, .jpeg files
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  // Tells webpack to output the build file to the ./build folder and name it bundle.js
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    // HtmlWebpackPlugin injects the bundle.js file inside the ./src/index.html and moves the ./src/index.html to the ./build folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
  stats: "errors-only",
};
