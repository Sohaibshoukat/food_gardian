const mongoose = require('mongoose');
const { Schema } = mongoose;

const FoodSchema = new Schema({
    Pic: {
        type: String,
    },
    FoodTitle: {
        type: String,
    },
    Price: {
        type: Number
    },
    Description: {
        type: String
    },
    ExpiryDate: {
        type: Date,
        default: new Date
    },
    Calories: {
        type: Number
    },
    Rating: {
        type: Number
    },
    Type: {
        type: String,
        enum: ['Donation', 'Sell']
    },
    User_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
})

const Food = mongoose.model("Food", FoodSchema)
module.exports = Food