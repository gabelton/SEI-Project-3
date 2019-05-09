const mongoose = require('mongoose')
const { dbURI } = require('./config/environment')
const User = require('./models/User')
const Vinyl = require('./models/Vinyl')

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      User.create({
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
        speed: '45 RPM',
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
        speed: '45 RPM',
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
        speed: '45 RPM',
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
        speed: '45 RPM',
        catalogueNumber: 'ATL-5038',
        barcode: 7567813392
      },{
        artist: 'Chaka Khan',
        title: 'Hello Happiness',
        image: 'https://images-na.ssl-images-amazon.com/images/I/611%2BDwiZ6lL._SL1056_.jpg',
        releaseYear: 2019,
        genre: 'Pop',
        condition: 'Mint',
        length: '27:10',
        notes: 'Hello Happiness is the twelfth studio album by American singer Chaka Khan, released on February 15, 2019. It is her first new material since 2007s Funk This. On limited coral coloured vinyl.',
        label: 'Island Records',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: '7738531',
        barcode: 602577385315
      },{
        artist: 'Robyn',
        title: 'Honey',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61WaZwHl3iL._SL1200_.jpg',
        releaseYear: 2018,
        genre: 'Pop',
        condition: 'Mint',
        length: '40:23',
        notes: 'Honey is the eighth studio album by Swedish singer Robyn, and her first since Body Talk (2010). It was released on 26 October 2018 through Konichiwa and Island Records. It features the singles "Missing U", "Honey" (a version of which originally featured in the final season of the HBO series Girls in 2017), and "Send to Robin Immediately"',
        label: 'Island Records',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: 'KOR057LP',
        barcode: 602567994688
      },{
        artist: 'Nancy Wilson/Cannonball Adderley',
        title: 'Nancy Wilson/Cannonball Adderley',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71DKpG24iBL._SL1490_.jpg',
        releaseYear: 1961,
        genre: 'Jazz',
        condition: 'Fair',
        length: '41:34',
        notes: 'Nancy Wilson/Cannonball Adderley is a studio album by Nancy Wilson and Cannonball Adderley issued in February 1962 by Capitol Records.',
        label: 'Capitol Records',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: 'ST-1657',
        barcode: 123456789
      },{
        artist: 'St Vincent',
        title: 'St Vincent',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91mV8CQIoCL._SL1200_.jpg',
        releaseYear: 2014,
        genre: 'Alternative Rock',
        condition: 'Mint',
        length: '40:04',
        notes: 'St. Vincent is the eponymous fourth studio album by American musician St. Vincent. The album won a 2015 Grammy Award for Best Alternative Album, making St. Vincent only the second female solo artist to win the award since its inception in 1991.',
        label: 'Loma Vista',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: 'UNIW40355',
        barcode: 60253672509
      },{
        artist: 'Radiohead',
        title: 'In Rainbows',
        image: 'https://img.discogs.com/hldHd6xXfRrbYVgHDByRoNS8Pnw=/fit-in/600x586/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1187003-1495677239-2816.jpeg.jpg',
        releaseYear: 2007,
        genre: 'Alternative Rock',
        condition: 'Mint',
        length: '42:39',
        notes: 'n Rainbows is the seventh studio album by English rock band Radiohead. It was self-released on 10 October 2007 as a pay-what-you-want download, followed by a physical release internationally by XL Recordings in December 2007.',
        label: 'XL Recordings',
        size: '12"',
        format: '1LP',
        speed: '45 RPM',
        catalogueNumber: 'XLLP 324',
        barcode: 880882162313
      },{
        artist: 'D\'Aneglo',
        title: 'Brown Sugar',
        image: 'https://img.discogs.com/qhZuVZb8wSWqKmvuJioQwzJsxTA=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3997782-1419865751-1816.jpeg.jpg',
        releaseYear: 1995,
        genre: 'RnB',
        condition: 'Mint',
        length: '53:17',
        notes: 'Brown Sugar is the debut studio album by American R&B singer, songwriter, and multi-instrumentalist D\'Angelo. It was released on July 3, 1995, by EMI Music.',
        label: 'EMI',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: '4724081',
        barcode: 602547240811
      },{
        artist: 'Kendrick Lamar',
        title: 'Damn',
        image: 'https://img.discogs.com/7DbnFpfKBhaeQT1Mac1c4j-2xPI=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10133538-1492204963-3196.jpeg.jpg',
        releaseYear: 2017,
        genre: 'Hip-Hop',
        condition: '',
        length: '54:54',
        notes: 'Damn (stylized as DAMN.) is the fourth studio album by American rapper Kendrick Lamar. It was released on April 14, 2017, by Aftermath Entertainment, Interscope Records and Top Dawg Entertainment.',
        label: 'Polydor',
        size: '12"',
        format: '2LP',
        speed: '45 RPM',
        catalogueNumber: '5761828',
        barcode: 602557618280
      }])
    })
})
