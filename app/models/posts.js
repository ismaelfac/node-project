const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            index: true
        },
        description: {
            type: String,
            require: true
        },
        author: {
            type: mongoose.Types.ObjectId,
            require: true
        },
        likes: {
            type: Number,
            require: true
        },
        isActive: {
            type: Boolean,
            require: true,
            index: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('posts', PostSchema)