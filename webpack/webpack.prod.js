const webpack = require("webpack");

// Webpack configuration for the prod environment
module.exports = {
  mode: "production",
  // This is the devtool used by CRA, many more devtools are available
  // Source-Map: A source-map is a .map file that maps the bundled code to your source code
  // Use: When your budled code errors out, the browser will console log the error pointing at the source code
  devtool: "source-map",
  // This allows you to set any custom environment variable you may need in dev
  plugins: [
    new webpack.DefinePlugin({
      "process.env.author": JSON.stringify("Valentino30"),
    }),
  ],
};
