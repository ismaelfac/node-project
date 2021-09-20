const mongoose = require('mongoose');

const TypeActorsSchema = new mongoose.Schema(
    {
        nameActor: {
            type: String,
            require: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('type_actors', TypeActorsSchema)