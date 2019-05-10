const router = require('express').Router()
const secureRoute = require('../lib/secureRoute')
const vinylsController = require('../controllers/vinyls')
const usersController = require('../controllers/users')
const authController = require('../controllers/auth')

router.get('/', (req, res) => res.json({ message: 'Welcome to Project Black' }))

router.get('/vinyls', vinylsController.index)
router.post('/vinyls', secureRoute, vinylsController.create)
router.get('/vinyls/:id', vinylsController.show)
router.put('/vinyls/:id', secureRoute, vinylsController.update)
router.delete('/vinyls/:id', secureRoute, vinylsController.delete)

router.get('/users', usersController.index)
router.post('/users', secureRoute, usersController.create)
router.get('/users/:id', usersController.show)
router.put('/users/:id', secureRoute, usersController.update)
router.delete('/users/:id', secureRoute, usersController.delete)

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/me', secureRoute, authController.profile)

module.exports = router
