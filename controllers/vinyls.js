const Vinyl = require('../models/Vinyl')

function indexRoute(req, res) {
  Vinyl.find()
    .then(vinyls => res.json(vinyls))
}

module.exports = {
  index: indexRoute
}
