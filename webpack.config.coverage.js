"use strict";
/**
 * Webpack frontend test (w/ coverage) configuration.
 */
var _ = require("lodash");
var testCfg = require("./webpack.config.test");

module.exports = _.merge({}, testCfg, {
  isparta: {
    babel: {
      presets: ["es2015", "stage-1", "react"]
    }
  },
  module: {
    preLoaders: [
      // Manually instrument client code for code coverage.
      // https://github.com/deepsweet/isparta-loader handles ES6 + normal JS.
      {
        test: /src\/.*\.jsx?$/,
        exclude: /(test|node_modules)\//,
        loader: "isparta"
      }
    ]
  }
});
