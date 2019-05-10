const User = require('../models/User')

function indexRoute(req, res) {
  User.find()
    .then(users => res.json(users))
}

function showRoute(req, res) {
  User
    .findById(req.params.id)
    .populate()
    .then(user => res.json(user))
}

function createRoute(req, res) {
  User.create(req.body)
    .then(user => res.status(201).json(user))
}

function updateRoute(req, res) {
  User.findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
}

function deleteRoute(req, res) {
  User.findById(req.params.id)
    .then(user => user.remove())
    .then(() => res.sendStatus(204))
}




module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
}
