const mongoose = require('mongoose');

const DocumentsContractActorsSchema = new mongoose.Schema(
    {
        contractActorsId: {
            type: Schema.ObjectId, 
            ref: "contract_actors"
        },
        documentsContractId: { 
            type: Schema.ObjectId, 
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


module.exports = mongoose.model('documents_contract_actors', DocumentsContractActorsSchema)