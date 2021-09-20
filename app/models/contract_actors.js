const mongoose = require('mongoose');
const people = mongoose.model('people');
const contracts = mongoose.model('contracts');
const type_actors = mongoose.model('type_actors');

const ContractActorsSchema = new mongoose.Schema(
    {
        contractId: { 
            type: Schema.ObjectId, 
            ref: "contracts" 
        },
        peopleId: { 
            type: Schema.ObjectId, 
            ref: "people" 
        },
        actorId: {
            type: Schema.ObjectId, 
            ref: "type_actors" 
        },
        typePerson: {
            type: Array,
            default: ['Natural', 'Juridica'],
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('contract_actors', ContractActorsSchema)