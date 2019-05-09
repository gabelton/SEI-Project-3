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

function updateRoute(req, res) {
  Vinyl.findById(req.params.id)
    .then(vinyl => vinyl.set(req.body))
    .then(vinyl => vinyl.save())
    .then(vinyl => res.json(vinyl))
}

function deleteRoute(req, res) {
  Vinyl.findById(req.params.id)
    .then(vinyl => vinyl.remove())
    .then(() => res.sendStatus(204))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
}
