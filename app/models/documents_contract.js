const mongoose = require('mongoose');

const DocumentsContractSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        state: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('documents_contract', DocumentsContractSchema)