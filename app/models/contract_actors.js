const mongoose = require('mongoose');

const ContractActorsSchema = new mongoose.Schema(
    {
        contractId: { 
            type: mongoose.Types.ObjectId, 
            ref: "contracts" 
        },
        peopleId: { 
            type: mongoose.Types.ObjectId, 
            ref: "people" 
        },
        actorId: {
            type: mongoose.Types.ObjectId, 
            ref: "type_actors" 
        },
        typePerson: {
            type: String,
            enum: ['Natural', 'Juridica'],
            default: 'Natural',
            require: true
        },
        PeoplelegalRepresentative: {
            type: mongoose.Types.ObjectId, 
            ref: "people"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('contract_actors', ContractActorsSchema)