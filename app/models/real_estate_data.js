const mongoose = require('mongoose');

const RealEstateData = new mongoose.Schema(
    {
        propertyType: {
            type: String,
            require: true,
            index: true
        },
        address: {
            type: String,
            require: true
        },
        garages: {
            type: Array,
            default: [],
            index: true
        },
        useful_room: {
            type: Array,
            default: [],
            index: true
        },
        isActive: {
            type: Boolean,
            default: false,
            index: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('real_estate_datas', RealEstateData)