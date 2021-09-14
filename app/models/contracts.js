const mongoose = require('mongoose');
const people = mongoose.model('people');
const real_estate_data = mongoose.model('real_estate_data');

const ContractsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            index: true
        },
        age: {
            type: Number
        },
        NoAsegurable: {
            type: String,
            index: true
        },
        isActive: {
            type: Boolean,
            index: true
        },
        arrendatario: { type: Schema.ObjectId, ref: "people" },
        deudorSolidario: {},
        real_estate_data: { type: Schema.ObjectId, ref: "real_estate_data" }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('contracts', ContractsSchema)