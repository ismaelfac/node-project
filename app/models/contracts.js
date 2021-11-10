const mongoose = require('mongoose');

const ContractsSchema = new mongoose.Schema(
    {
        ContractType: {
            type: String,
            require: true,
            index: true
        },
        contractNum: {
            type: String,
            require: true,
            index: true
        },
        asegurable: {
            type: String,
            index: true
        },
        domus: {
            type: String
        },
        cannonLease: {
            type: String
        },
        adminValue: {
            type: String
        },
        contract_period: {
            type: String
        },
        increment: {
            type: String
        },
        contractRights: {
            type: String
        },
        deliveryDate: {
            type: Date
        },
        gracePeriod: {
            type: String
        },
        clause: {
            type: String
        },
        isActive: {
            type: Boolean,
            default: false,
            index: true
        },
        real_estate_data: { 
            type: mongoose.Types.ObjectId, 
            ref: "real_estate_datas" 
        },
        adviser: {
            type: mongoose.Types.ObjectId, 
            ref: "users"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('contracts', ContractsSchema)