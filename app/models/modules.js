const mongoose = require('mongoose');

const ModulesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            index: true
        },
        description: {
            type: String
        },
        is_active: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('modules', ModulesSchema)