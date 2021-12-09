const mongoose = require('mongoose');

const TypeActorsSchema = new mongoose.Schema(
    {
        nameActor: {
            type: String,
            require: true,
        },
        category: {
            type: String,
            enum: ['Sin Definir','PersonaAD', 'PersonaPUC'],
            default: 'Sin Definir',
            require: true
        },
        isActive: {
            type: Boolean,
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('type_actors', TypeActorsSchema)