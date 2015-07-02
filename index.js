var Path = require('path')
var Hapi = require('hapi')
var NunjucksHapi = require('nunjucks-hapi')

// server
var server = new Hapi.Server()
server.connection({
  port: process.env.PORT || 4000,
  router: {
    isCaseSensitive: false,
    stripTrailingSlash: true
  }
})

// register views
var baseDir = Path.join(__dirname, 'app/views')
var env = NunjucksHapi.configure(baseDir)
server.views({
  engines: {
    nun: {
      module: NunjucksHapi
    }
  },
  path: baseDir,
  defaultExtension: 'nun',
  isCached: false,
  compileMode: 'sync'
})

// routes
server.route(require('./config/routes').routes)

// register plugins and start server
server.register(require('./config/plugins').plugins, function(err) {
  if (err) {
    throw err
  }

  // start server
  server.start(function() {
    console.info('Server started at ' + server.info.uri)
  })
})
