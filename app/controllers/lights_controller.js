var handlers = {}

handlers.index = {
  handler: function(req, res) {
    res.view('lights/index')
  }
}

module.exports = handlers 
