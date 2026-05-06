require('dotenv').config();

const app = require('./app.js')
const connectDB = require('./config/db.js')

const PORT = process.env.PORT || 5000

const startServer = async() => {

    await connectDB()

    app.listen(5000, () => {
        console.log(`Server is live on Port ${PORT}`)
    })
}

startServer()

