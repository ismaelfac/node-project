const mongoose = require('mongoose');

const RolePermissionsSchema = new mongoose.Schema(
    {
        roleId : {
            ref: "roles",
            type: mongoose.Types.ObjectId
        },
        permissionId: {
            ref: "permissions",
            type: mongoose.Types.ObjectId
        },
        isActive: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model('role_permissions', RolePermissionsSchema)