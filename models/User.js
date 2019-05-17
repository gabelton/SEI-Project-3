const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: 'Please provide a username',
    unique: 'That username is already registered'
  },
  email: {
    type: String,
    required: 'Please provide and email address',
    unique: 'That email is already registered'
  },
  password: {
    type: String,
    required: 'Please provide a password'
  },
  image: {
    type: String,
    default: 'https://candobristol.co.uk/img/profile-pic.svg'
  },
  bio: {
    type: String
  },
  vinylWish: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Vinyl'
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform(doc, json) {
      delete json.password
      delete json.__v
      return json
    }
  }
})

userSchema.virtual('vinyls', {
  localField: '_id',
  foreignField: 'createdBy',
  ref: 'Vinyl'
})

userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(plaintext) {
    this._passwordConfirmation = plaintext
  })

userSchema.pre('validate', function checkPasswords(next) {
  if(this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }
  next()
})

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }

  next()
})

userSchema.methods.isPasswordValid = function isPasswordValid(plaintext) {
  return bcrypt.compareSync(plaintext, this.password)
}

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc,json) {
    return json
  }
})


userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
