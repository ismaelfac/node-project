const mongoose = require('mongoose');

const DocumentsContractEstateSchema = new mongoose.Schema(
    {
        documentsContractId: { 
            type: mongoose.Types.ObjectId, 
            ref: "documents_contract"
        },
        address: {
            type: String
        },
        filename: {
            type: String,
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
        state: {
            type: String,
            enum: ['Pendiente', 'Por Revision', 'Rechazado', 'Aprobado'],
            default: 'Pendiente'
        },
        isActive: {
            type: Boolean,
            default: false,
            require: true
        },

    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('documents_contract_estates', DocumentsContractEstateSchema)