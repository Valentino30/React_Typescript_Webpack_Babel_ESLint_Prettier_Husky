const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

// Merged the common configuration with the dev or prod one depending on the specified environment
// The envVars are automatically picked up from the scripts "start" or "build"
module.exports = (envVars) => {
  const { env } = envVars;
  const environmentConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, environmentConfig);
  return config;
};
