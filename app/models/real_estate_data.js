const mongoose = require('mongoose');
const contract = mongoose.model('contracts')
const RealEstateData = new mongoose.Schema(
    {
        contract: { ype: Schema.ObjectId, ref: "contracts" },
        propertyType: {
            type: Array,
            require: true,
            index: true
        },
        address: {
            type: String,
            require: true
        },
        garages: {
            type: Array,
            unique: true,
            index: true
        },
        useful_room: {
            type: Array,
        },
        cannonLease: {
            type: String
        },
        adminValue: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('real_estate_data', RealEstateData)