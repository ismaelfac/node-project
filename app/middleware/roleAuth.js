const { verifyToken} = require('../helpers/generateToken');
const userModel  = require('../models/users');

const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers.authorization.split(' ')[1];
        const tokenData = await verifyToken(token);
        const userData = await userModel.findById(tokenData.id);
        console.log(userData)
        if ([].concat(roles).includes(userData.roles)) {
            next()
        }else {
            res.status(409).send({error: 'Lo sentimos, No tienes permisos para este modulo!'});
        }
    }catch(e) {

    }
}

module.exports = { checkRoleAuth }