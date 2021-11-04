const { verifyToken} = require('../helpers/generateToken');
const looger = require('../helpers/looger');

const checkAuth = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers.authorization.split(' ')[1];
        const tokenData = await verifyToken(token);        
        if (tokenData.id) {
            looger.info(`peticion usuario: ${JSON.stringify(tokenData.id)} host: ${req.headers.host}`);
            next()
        }else {
            looger.info(`autenticacion incorrecta: ${JSON.stringify(tokenData.id)} host: ${req.headers.host}`);
            res.status(409).send({error: 'Lo sentimos, autenticación incorrecta!'});
        }
    }catch(e) {
        looger.info(e);
    }
}

module.exports = { checkAuth }