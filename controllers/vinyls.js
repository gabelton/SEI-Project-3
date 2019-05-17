const Vinyl = require('../models/Vinyl')

function indexRoute(req, res, next) {
  Vinyl.find()
    .populate('createdBy')
    .then(vinyls => res.json(vinyls))
    .catch(next)
}

function showRoute(req, res, next) {
  Vinyl.findById(req.params.id)
    .populate('createdBy', '-email')
    .populate('comments.user')
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

function commentCreateRoute(req, res, next) {

  req.body.user = req.currentUser
  Vinyl.findById(req.params.id)
    .then(vinyl => {
      vinyl.comments.push(req.body)
      return vinyl.save()
    })
    .then(vinyl => res.json(vinyl))
    .catch(next)
}

function commentDeleteRoute(req, res, next) {
  Vinyl.findById(req.params.id)
    .then(vinyl => {
      const comment = vinyl.comments.id(req.params.commentId) 
      comment.remove()
      return vinyl.save()
    })
    .then(vinyl => res.json(vinyl))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
}
