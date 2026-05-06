const mongoose = require('mongoose')

const connectDB = async() => {
    // console.log("url: ", process.env.Mongo_URI)

    try{
        await mongoose.connect(process.env.Mongo_URI)
        console.log("Mongoose Connected Succesfully!!!")
    }

    catch(err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB