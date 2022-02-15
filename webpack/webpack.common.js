const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Common configuration to be used for both dev and prod environment
module.exports = {
  // Defines the entry point for the application to be ./src/index.tsx
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    // Allows you to write import statements without using .tsx, .ts and .js
    extensions: ['.tsx', '.ts', '.js'],
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
            loader: 'babel-loader',
          },
        ],
      },
      // Tells webpack to use style-loader and css-loader to load all .css files
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      // Tells webpack to use its built-in asset/resource loader to load all .ico, .gif, .png, .jpg, .jpeg files
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // Tells webpack to use its built-in asset/inline loader to load all .eot, .ttf, .otf, .svg files
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  // Tells webpack to output the build file to the ./build folder and name it bundle.js
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
    // Added this to avoid Cannot GET on client-side routes other than '/'
    // Source: https://ui.dev/react-router-cannot-get-url-refresh/
    publicPath: '/',
  },
  plugins: [
    // HtmlWebpackPlugin injects the bundle.js file inside the ./src/index.html and moves the ./src/index.html to the ./build folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  stats: 'errors-only',
}
