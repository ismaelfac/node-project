const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            index: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('roles', RoleSchema)