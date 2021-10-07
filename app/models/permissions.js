const mongoose = require('mongoose');

const PermissionsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            index: true
        },
        action: {
            type: String
        },
        description: {
            type: String
        },
        is_system: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('permissions', PermissionsSchema)