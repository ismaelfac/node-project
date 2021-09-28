const mongoose = require('mongoose');

const UploadSchema = new mongoose.Schema(
    {
        documentContractActorId: {
            type: String
        },
        title: {
            type: String,
            require: true,
            index: true
        },
        description: {
            type: String
        },
        file: {
            type: String,
            require:true
        },
        size: {
            type: String
        },
        isActive: {
            type: Boolean,
            require: true,
            index: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('uploads', UploadSchema)