const router = require('express').Router()
const secureRoute = require('../lib/secureRoute')
const vinylsController = require('../controllers/vinyls')
const authController = require('../controllers/auth')

router.get('/', (req, res) => res.json({ message: 'Welcome to Project Black' }))

router.get('/vinyls', vinylsController.index)
router.post('/vinyls', secureRoute, vinylsController.create)
router.get('/vinyls/:id', vinylsController.show)
router.put('/vinyls/:id', secureRoute, vinylsController.update)
router.delete('/vinyls/:id', secureRoute, vinylsController.delete)

router.post('/register', authController.register)
router.post('/login', authController.login)


module.exports = router
