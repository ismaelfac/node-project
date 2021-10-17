const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsersSchema = new mongoose.Schema(
    {
        personId: {
            type: mongoose.Types.ObjectId, 
            ref: "people"
        },
        name: {
            type: String,
            require: true,
            index: true
        },
        email: {
            type: String,
            unique: true,
            index: true,
            trim: true
        },
        password: {
            type: String
        },
        roles: {
            type: String,
            default: 'user'
        },
        avatar: {
            type: String,
            trim: true,
            required: true //Debe tener un valor
        },
        isActive: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

UsersSchema.statics.encryptPassword = async (password)  => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

UsersSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

module.exports = mongoose.model('users', UsersSchema)