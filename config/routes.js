var LightsController = require('../app/controllers/lights_controller')
var RemotesController = require('../app/controllers/remotes_controller')

module.exports.routes = []

module.exports.routes.push({
  method: 'GET',
  path: '/',
  handler: function(req, res) {
    res.view('index', { name: "this is a test" })
  }
})

// Lights
module.exports.routes.push({
  method: 'GET',
  path: '/lights',
  config: LightsController.index
})

// Remotes
module.exports.routes.push({
  method: 'GET',
  path: '/remotes',
  handler: RemotesController.index
})

module.exports.routes.push({
  method: 'GET',
  path: '/remotes/{remote}',
  handler: RemotesController.show
})

// Static
module.exports.routes.push({
  method: 'GET',
  path: '/js/angular/{file}',
  handler: {
    directory: {
      path: './node_modules/angular/'
    }
  }
})

module.exports.routes.push({
  method: 'GET',
  path: '/js/restangular/{file}',
  handler: {
    directory: {
      path: './node_modules/restangular/dist/'
    }
  }
})

module.exports.routes.push({
  method: 'GET',
  path: '/js/underscore/{file}',
  handler: {
    directory: {
      path: './node_modules/underscore/'
    }
  }
})

module.exports.routes.push({
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: {
      path: './public'
    }
  }
})
