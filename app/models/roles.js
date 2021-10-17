const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            index: true
        },
        special: {
            type: String,
            require: true,
        },
        isActive: {
            type: Boolean,
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('roles', RoleSchema)