'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: 'AIzaSyDNqcVE7gtu1f9gB1LxQ8cJFQcl1sW1utM'
})
