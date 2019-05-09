const mongoose = require('mongoose')
const { dbUri } = require('./config/environment')
const User = require('./models/User')
const Vinyl = require('./models/Vinyl')

mongoose.connect(dbUri, (err, db) => {
  db.dropDatabase()
    .then(() => {
      User.Create({
        username: 'seangray1',
        email: 'sean.myles.gray@gmail.com',
        password: 'pass',
        passwordConfirmation: 'pass'
      })
    })
    .then(() => {
      return Vinyl.create([{
        artist: 'Childish Gambino',
        title: 'Awaken, My Love',
        image: 'https://img.discogs.com/wAATX_t7ex9676wTKZudRnFzpi0=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10288421-1495025633-4438.jpeg.jpg',
        releaseYear: 2017,
        genre: 'Funk',
        condition: 'Mint',
        length: '48:57',
        notes: '"Awaken, My Love!" is the third studio album by American rapper Donald Glover',
        label: 'Glassnote',
        size: '12"',
        format: '2LP',
        speed: '45RPM',
        catalogueNumber: 'GLS-0209-01',
        barcode: 810599021412
      },{
        artist: 'A Tribe Called Quest',
        title: 'The Low End Theory',
        image: 'https://img.discogs.com/Na_71Y9oc_wwixsjzafZhfDWQZA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-94800-1467721235-8229.jpeg.jpg',
        releaseYear: 1991,
        genre: 'Hip-Hop',
        condition: 'Mint',
        length: '48:03',
        notes: 'The Low End Theory is the second studio album by American hip hop group A Tribe Called Quest',
        label: 'Jive',
        size: '12"',
        format: '1LP',
        speed: '45RPM',
        catalogueNumber: '1418-1-JDJ',
        barcode: 3562749401700
      },{
        artist: 'Slayer',
        title: 'Reign In Blood',
        image: 'https://img.discogs.com/PAvYnD9WYdKCdkDZW2-X6erkIkk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-377521-1262974365.jpeg.jpg',
        releaseYear: 1986,
        genre: 'Heavy Metal',
        condition: 'Mint',
        length: '25:58',
        notes: 'KILL KIILLL KIIIILLLLLLKIKIKIKKK KKKKKKKKKKK',
        label: 'Def Jam Recordings',
        size: '12"',
        format: '1LP',
        speed: '45RPM',
        catalogueNumber: 'GHS 24131',
        barcode: 6007535010540
      },{
        artist: 'Ornette Coleman',
        title: 'The Shape Of Jazz To Come',
        image: 'https://img.discogs.com/Px82OSzDFGt3wHlYP_Fpwqlgkx0=/fit-in/600x591/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-488973-1537684103-9468.jpeg.jpg',
        releaseYear: 1959,
        genre: 'Jazz',
        condition: 'Mint',
        length: '37:59',
        notes: 'The Shape of Jazz to Come is the third album by jazz musician Ornette Coleman.',
        label: 'Atlantic',
        size: '12"',
        format: '2LP',
        speed: '45RPM',
        catalogueNumber: 'ATL-5038',
        barcode: 7567813392
      }])
    })
})
