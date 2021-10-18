const { verifyToken} = require('../helpers/generateToken');
const looger = require('../helpers/looger');
const userModel  = require('../models/users');
const MenuSchema  = require('../models/menus');
const RoleSchema  = require('../models/roles');
const MenuRoleSchema  = require('../models/menu_roles');

const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers.authorization.split(' ')[1];
        const tokenData = await verifyToken(token);
        const userData = await userModel.findById(tokenData.id);
        const rolesFind = await findMenuRoleWithPermissionWithStateActive(userData.roles, req.baseUrl, req.method);
        if ([].concat(roles).includes(userData.roles)) {
            looger.info(`role: ${JSON.stringify(userData.roles)} - ${req.baseUrl}`)
            next()
        }else {
            looger.info(`sin permiso: ${JSON.stringify(userData.roles)} - ${req.baseUrl}`)
            res.status(409).send({error: 'Lo sentimos, No tienes permisos para este modulo!'});
        }
    }catch(e) {

    }
}
const findMenuRoleWithPermissionWithStateActive = async (roleUser, baseUrl, method) => {
    console.log(`role del usuario ${roleUser} - url a visitar ${baseUrl} con el metodo ${method}`);
    const menuId = MenuSchema.aggregate([
        {
            $match: {names: baseUrl }
        }
    ])
    const roleId = RoleSchema.aggregate([
        {
            $match: {name: roleUser }
        }
    ])
    return await MenuRoleSchema.aggregate([
        {
            $match: {menuId: menuId}
        }
    ])
}
module.exports = { checkRoleAuth }