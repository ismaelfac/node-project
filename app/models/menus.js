const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema(
    {
        names: {
            type: String,
            require: true,
            index: true
        },
        description: {
            type: String,
            require: true
        },
        methods: {
            type: String,
            require: true
        },
        level: {
            type: Number,
            require: true,
            default: 1
        },
        order: {
            type: Number,
            require: true,
            default: 0
        },
        parent: {
            type: mongoose.Types.ObjectId, 
            default: 0
        },
        link: {
            type: String,
            require: true,
        },
        icon: {
            type: String,
        },
        isActive: {
            type: Boolean,
            require: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('menus', MenuSchema)