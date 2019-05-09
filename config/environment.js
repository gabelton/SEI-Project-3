const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project-black'
const secret = process.env.SECRET || 'Zge{T*g._&;(gCaQ2mcn=-mR'

module.exports = { port, dbURI, secret }
