const { verifyToken} = require('../helpers/generateToken');
const looger = require('../helpers/looger');
const userModel  = require('../models/users');

const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers.authorization.split(' ')[1];
        const tokenData = await verifyToken(token);
        const userData = await userModel.findById(tokenData.id);
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

module.exports = { checkRoleAuth }