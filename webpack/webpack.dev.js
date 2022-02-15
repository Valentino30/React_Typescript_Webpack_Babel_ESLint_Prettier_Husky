const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

// Webpack configuration for the dev environment
module.exports = {
  mode: 'development',
  devServer: {
    // This enables webpack's hot module replacement, which prevents the browser from refreshing every time we change something in the code
    hot: true,
    // This substiture the --open flag on the "start" script to automatically launch the browser on start
    open: true,
    // Added this to avoid Cannot GET on client-side routes other than '/'
    // Source: https://ui.dev/react-router-cannot-get-url-refresh/
    historyApiFallback: true,
  },
  // This is the devtool used by CRA, many more devtools are available
  // Source-Map: A source-map is a .map file that maps the bundled code to your source code
  // Use: When your budled code errors out, the browser will console log the error pointing at the source code
  devtool: 'cheap-module-source-map',
  plugins: [
    // This allows you to set any custom environment variable you may need in dev
    new webpack.DefinePlugin({
      'process.env.author': JSON.stringify('Valentino30'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
