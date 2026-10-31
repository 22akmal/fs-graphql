require('dotenv').config()

const connectToDataBase = require('./db')
const startServer = require('./server')

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 4000

const main = async () => {
  await connectToDataBase(MONGODB_URI)
  startServer(PORT)
}
main()