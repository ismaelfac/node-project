const mongoose = require('mongoose');

const DocumentsContractEstateSchema = new mongoose.Schema(
    {
        contractActorsId: {
            type: mongoose.Types.ObjectId, 
            ref: "real_estate_data"
        },
        documentsContractId: { 
            type: mongoose.Types.ObjectId, 
            ref: "documents_contract"
        },
        files: {
            type: Array
        },
        state: {
            type: String,
            enum: ['Pendiente', 'Por Revision', 'Rechazado', 'Aprobado'],
            default: 'Pendiente'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('documents_contract_estates', DocumentsContractEstateSchema)