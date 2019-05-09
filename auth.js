const { secret } = require('../config/environment')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

function registerRoute(req, res, next){
  User.create(req.body)
    .then(() => res.status(201).json({ message: 'Registration successful'}))
    .catch(next)

}
function loginRoute(req, res, next){
  User.findOne({email: req.body.email})
    .then(user =>{
      if(!user || !user.isPasswordValid(req.body.password)){
        return res.status(401).json({message: 'Unauthorized'})
      }
      const token = jwt.sign({sub: user._id}, secret,{ expiresIn: '6h'})
      res.json({message: 'Lets spin some plastic!', token})
    })
    .catch(next)
}


module.exports = {
  register: registerRoute,
  login: loginRoute
}
