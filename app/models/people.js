const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema(
    {
        names: {
            type: String,
            require: true,
            index: true
        },
        dni: {
            type: String,
            require: true,
            index: true
        },
        email: {
            type: String,
            unique: true,
            index: true
        },
        phone: {
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('users', UsersSchema)