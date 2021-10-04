const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            index: true
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true,
            index: true
        },
        password: {
            type: String
        },
        token: {
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('users', UsersSchema)