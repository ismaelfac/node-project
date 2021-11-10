const { verifyToken} = require('../helpers/generateToken');
const looger = require('../helpers/looger');
const userModel  = require('../models/users');
const MenuSchema  = require('../models/menus');
const RoleSchema  = require('../models/roles');
const MenuRoleSchema  = require('../models/menu_roles');

const checkRoleAuth = () => async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers.authorization.split(' ')[1];
        const tokenData = await verifyToken(token);
        const userData = await userModel.findById(tokenData.id);
        looger.info(`token: ${req.body}`);
        const rolesFind = await findMenuRoleWithPermissionWithStateActive(userData.roles, req.baseUrl);
        looger.info('rolesFind: ',rolesFind);
        if (rolesFind[0].isActive) {
            looger.info(`role: ${JSON.stringify(userData.roles)} - ${req.baseUrl} with methods ${req.method}`);
            next()
        }else {
            looger.info(`sin permiso: ${JSON.stringify(userData.roles)} - ${req.baseUrl}`)
            res.status(409).send({error: 'Lo sentimos, No tienes permisos para este modulo!'});
        }
    }catch(e) {
        looger.info(e);
    }
}
const findMenuRoleWithPermissionWithStateActive = async (roleUser, baseUrl) => {
    var baseResult = baseUrl.split("/api/1.0/");
    const menuId = await MenuSchema.aggregate([
        {
            $match: {names: baseResult[1] }
        }
    ])
    const roleId = await RoleSchema.aggregate([
        {
            $match: {name: roleUser }
        }
    ])
    looger.info('menu y role: ',menuId,'',roleId);
    return await MenuRoleSchema.aggregate([
        {
            $match: {menuId: {$eq: menuId[0]._id}}
        },
        {
            $match: { roleId: {$eq: roleId[0]._id}}
        }
    ])
}
module.exports = { checkRoleAuth }