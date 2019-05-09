const router = require('express').Router()
const vinylsController = require('../controllers/vinyls')
const authController = require('../controllers/auth')

router.get('/', (req, res) => res.json({ message: 'Welcome to Project Black' }))

router.get('/vinyls', vinylsController.index)
/*router.post('/vinyls', vinylsController.create)
router.get('/vinyls/:id', vinylsController.show)
router.put('/vinyls/:id', vinylsController.update)
router.delete('/vinyls/:id', vinylsController.delete)

router.post('/register', authController.register)
router.post('/login', authController.login) */


module.exports = router
