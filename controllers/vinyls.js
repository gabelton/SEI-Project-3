const Vinyl = require('../models/Vinyl')

function indexRoute(req, res, next) {
  Vinyl.find()
    .then(vinyls => res.json(vinyls))
    .catch(next)
}

function showRoute(req, res, next) {
  Vinyl.findById(req.params.id)
    .populate('createdBy')
    .then(vinyl => res.json(vinyl))
    .catch(next)
}

function createRoute(req, res, next) {
  req.body.createdBy = req.currentUser
  Vinyl.create(req.body)
    .then(vinyl => res.status(201).json(vinyl))
    .catch(next)
}

function updateRoute(req, res, next) {
  Vinyl.findById(req.params.id)
    .then(vinyl => vinyl.set(req.body))
    .then(vinyl => vinyl.save())
    .then(vinyl => res.json(vinyl))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Vinyl.findById(req.params.id)
    .then(vinyl => vinyl.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
}
