const mongoose = require('mongoose');

const MenuRolesSchema = new mongoose.Schema(
    {
        menuId: {
            type: mongoose.Types.ObjectId, 
            ref: "menus"
        },
        roleId: {
            type: mongoose.Types.ObjectId, 
            ref: "roles"
        },
        isActive: {
            type: Boolean,
            default: false,
            require: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('menu_roles', MenuRolesSchema)