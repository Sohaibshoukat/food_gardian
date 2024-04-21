const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    FirstName: {
        type: String,
    },
    LastName: {
        type: String,
    },
    Email: {
        type: String,
        unique: true
    },
    Role: {
        type: String,
        enum: ['Business', 'Customer']
    },
    Phone: {
        type: String
    },
    Password: {
        type: String
    },
    Date: {
        type: Date,
        default: new Date
    },
})

const User = mongoose.model("User", userSchema)
module.exports = User