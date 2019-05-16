const User = require('../models/User')

function indexRoute(req, res, next) {
  User
    .find()
    .populate('vinyls')
    .populate('vinylWish')
    .then(users => res.json(users))
    .catch(next)
}

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate('vinyls')
    .populate('vinylWish')
    .then(user => res.json(user))
    .catch(next)
}

// no need for this
function createRoute(req, res, next) {
  User
    .create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next)
}

function updateRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(() => console.log('REQ BODY ***********', req.body))
    .then(user => res.json(user))
    .catch(next)
}

function deleteRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => user.remove())
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
