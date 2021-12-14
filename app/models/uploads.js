const mongoose = require('mongoose');

const UploadSchema = new mongoose.Schema(
    {
        documentContractActorId: {
            type: String
        },
        documentContractEstateId: {
            type: String
        },
        filename: {
            type: String,
            require: true,
            index: true
        },
        description: {
            type: String
        },
        destination: {
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