module.exports.plugins = []

module.exports.plugins.push({
  register: require('good'),
  options: {
    opsInterval: 15000,
    reporters: [{
      reporter: require('good-console'),
      args: [{log: '*', response: '*', ops: '*', error: '*'}]
    }]
  }
})
