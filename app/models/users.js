const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            index: true
        },
        email: {
            type: String,
            unique: true,
            index: true
        },
        numberPhone: {
            type:Number,
            default:'123-456'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('users', UsersSchema)