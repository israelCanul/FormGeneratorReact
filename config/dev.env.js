var merge = require("webpack-merge");
var prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API_JSONPLACEHOLDER: '"http://jsonplaceholder.typicode.com"',
  PROJECT: '"Dashboard"'
});
