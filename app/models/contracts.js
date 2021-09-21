const mongoose = require('mongoose');

const ContractsSchema = new mongoose.Schema(
    {
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
        isActive: {
            type: Boolean,
            default: false,
            index: true
        },
        real_estate_data: { 
            type: mongoose.Types.ObjectId, 
            ref: "real_estate_data" 
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('contracts', ContractsSchema)