const Vinyl = require('../models/Vinyl')

function indexRoute(req, res) {
  Vinyl.find()
    .then(vinyl => res.json(vinyl))
}

module.exports = {
  index: indexRoute
}
