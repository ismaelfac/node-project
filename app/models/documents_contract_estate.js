const mongoose = require('mongoose');

const DocumentsContractEstateSchema = new mongoose.Schema(
    {
        realEstateId: {
            type: mongoose.Types.ObjectId, 
            ref: "real_estate_data"
        },
        documentsContractId: { 
            type: mongoose.Types.ObjectId, 
            ref: "documents_contract"
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
        state: {
            type: String,
            enum: ['Pendiente', 'Por Revision', 'Rechazado', 'Aprobado'],
            default: 'Pendiente'
        },
        isActive: {
            type: Boolean,
            require: true
        },

    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('documents_contract_estates', DocumentsContractEstateSchema)