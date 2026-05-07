//              Importing files
const cookieParser = require('cookie-parser')
const cors = require('cors')
const adminRoutes = require('./routes/admin.routes.js')
const userRoutes = require('./routes/general.routes.js')


const express = require('express')
const app = express();

app.use(express.json());   // Global Middleware
app.use(cookieParser());    // so it can read cookie in req.cookies
// app.use(cors({
//     origin: ['http://localhost:5173', 'http://localhost:5174'],
//     credentials: true
// }));

app.use(cors({
    origin: [process.env.FRONTEND_URL,"https://www.vishavpreet.com",
    "https://vishavpreet.com", "http://localhost:5173"],
    credentials: true
}))

app.get('/', (req, res) => {
    res.send(" Running..... ")
})

app.use('/api/admin', adminRoutes)  // mouting routes
app.use('/api/user', userRoutes)    // without it routes will not work


module.exports = app
