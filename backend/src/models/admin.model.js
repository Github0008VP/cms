const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        password: {
            type: String,
            required: true,
            select: false // will not returned in queries until .select(+password)
        },
        
        // adding role to create multiple level admin
        role: {
            type: String,
            enum: ["superAdmin", "admin"],
            default: "admin"
        }
    }


)

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin