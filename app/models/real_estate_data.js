const mongoose = require('mongoose');

const RealEstateData = new mongoose.Schema(
    {
        domus: {
            type: String
        },
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
        usefulRoom: {
            type: Array,
            default: [],
            index: true
        },
        state: {
            type: String,
            enum: ['Arrendado', 'Libre', 'Proceso', 'Revisión'],
            default: 'Libre'
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