const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema(
    {
        dni: {
            type: String,
            require: true,
            index: true
        },
        type_dni: {
            type: String,
            require: true,
            index: true
        },
        last_name: {
            type: String,
            index: true,
            default: null
        },
        first_name: {
            type: String,
            index: true,
            default: null
        },
        business_name: {
            type: String,
            index: true,
            default: null
        }, 
        slug: {
            type: String,
            default: null
        },    
        email: {
            type: String,
            unique: true,
            index: true
        },
        address: {
            type: String,
            index: true,
            default: null
        },
        phone: {
            type: String,
        },
        landline: {
            type: String,
        },
        country_id: {
            type: String,
        },
        departament_id: {
            type: String,
        },
        municipality_id: {
            type: String,
        },
        location_id: {
            type: String,
        },
        neighborhood_id: {
            type: String,
        },
        latitude: {
            type: String,
        },
        longitude: {
            type: String,
        },
        birthdate: {
            type: String,
        },
        isActive: {
            type: Boolean,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('people', PeopleSchema)