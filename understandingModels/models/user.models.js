//creating a model/schema -> has a generic boilerplate which you have need to follow each and everytime

const mongoose = require('mongoose')
 
// const userSchema = new mongoose.Schema({
//     name: String,
//     rollNumber: Number,
//     isFemale: Boolean,
// })

const userSchema = new mongoose.Schema(
    {
        rollNumber: {
            //predefined key
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true,
            // unique: true
        },
        age: {
            type: Number,
            required: true,
            min: 18,
            max: 150
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('User', userSchema);