const mongoose = require('mongoose');

const ContractsSchema = new mongoose.Schema(
    {
        contractNum: {
            type: String,
            require: true,
            index: true
        },
        name: {
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
        contractPeriod: {
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
            ref: "real_estate_data" 
        },
        userCreateContractId: {
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