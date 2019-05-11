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

function commentCreateRoute(req, res, next) {
  //  add the currentUser to the data
  req.body.user = req.currentUser // this comes from `secureRoute`
  // find the character we want to add a comment to
  Vinyl.findById(req.params.id)
    .then(vinyl => {
      // add a comment to the character
      vinyl.comments.push(req.body)
      return vinyl.save()
    })
    .then(vinyl => res.json(vinyl))
    .catch(next)
}

function commentDeleteRoute(req, res, next) {
  // find the vinyl we want to delete the comment from
  Vinyl.findById(req.params.id)
    .then(vinyl => {
      const comment = vinyl.comments.id(req.params.commentId) // find the comment by its ID
      comment.remove() // remove the comment
      return vinyl.save() // save the vinyl
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
