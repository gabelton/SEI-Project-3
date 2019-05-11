const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    maxlength: 280
  }
}, {
  timestamps: true, // this adds `createdAt` and `updatedAt` properties
  toJSON: {
    // whenever the comment is converted to JSON
    transform(doc, json) {
      delete json.__v
      return json
    }
  }
})

const vinylSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: 'Please enter a name'
  },
  title: {
    type: String,
    required: 'Please enter a title',
    unique: 'That title has already been used'
  },
  image: {
    type: String,
    required: 'Please add an image'
  },
  releaseYear: {
    type: Number,
    required: 'Year'
  },
  genre: {
    type: String,
    required: true,
    enum: ['Rock & Roll','Jazz','Hip-Hop','Heavy Metal','Country','Punk','Alternative Rock','Techno','Funk','Pop','Electro','Reggae','Experimental','Folk','Drum n Bass','Soundtrack','RnB','Blues','Classical','Gospel','Ska']
  },
  condition: {
    type: String,
    required: true,
    enum: ['Mint','Near-Mint','Very Good','Good','Fair']
  },
  length: {
    type: String
  },
  notes: {
    type: String,
    maxlength: 300
  },
  label: {
    type: String,
    required: 'Add a label'
  },
  size: {
    type: String,
    required: true,
    enum: ['7','10','12']
  },
  format: {
    type: String,
    required: true,
    enum: ['1LP','2LP','3LP','4LP','Box Set']
  },
  speed: {
    type: String,
    required: true,
    enum: ['33 1/3 RPM','45 RPM', '78 RPM']
  },
  catalogueNumber: {
    type: String,
    required: 'Catalogue No.',
    unique: 'That number is already in the database'
  },
  barcode: {
    type: Number,
    required: 'Enter barcode'
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  comments: [ commentSchema ]
}, {
  toJSON: {
    // whenever the character is converted to JSON
    transform(doc, json) {
      delete json.__v
      return json
    }
  }
},
{timestamps: true
})

vinylSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Vinyl', vinylSchema)
