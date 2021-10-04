const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsersSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            index: true
        },
        email: {
            type: String,
            unique: true,
            index: true
        },
        password: {
            type: String
        },
        roles: [{
            ref: "roles",
            type: mongoose.Types.ObjectId
        }],
        token: {
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

UsersSchema.statics.encryptPassword = async (password)  => {
    bcrypt.genSalt(10)
}

UsersSchema.statics.comparePassword = async (password, receivedPassword) => {}

module.exports = mongoose.model('users', UsersSchema)