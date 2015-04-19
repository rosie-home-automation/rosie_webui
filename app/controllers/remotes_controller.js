var config = require('../../config/config')

var remotes = config.remotes
var handlers = {}

handlers.index = function(req, res) {
  res.view('remotes/index', { remotes: remotes })
}

handlers.show = function(req, res) {
  res.view('remotes/' + req.params.remote)
}

module.exports = handlers
