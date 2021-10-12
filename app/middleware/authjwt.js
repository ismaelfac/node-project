const { verifyToken} = require('../helpers/generateToken');

const checkAuth = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers.authorization.split(' ')[1];
        const tokenData = await verifyToken(token);
        if (tokenData.id) {
            next()
        }else {
            res.status(409).send({error: 'Lo sentimos, autenticación incorrecta!'});
        }
    }catch(e) {

    }
}

module.exports = { checkAuth }