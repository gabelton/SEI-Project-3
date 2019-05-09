const Vinyl = require('../models/Vinyl')

function indexRoute(req, res) {
  Vinyl.find()
    .then(vinyls => res.json(vinyls))
}

function showRoute(req, res) {
  Vinyl.findById(req.params.id)
    .then(vinyl => res.json(vinyl))
}

function createRoute(req, res) {
  Vinyl.create(req.body)
    .then(vinyl => res.status(201).json(vinyl))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute 
}
