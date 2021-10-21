const express = require('express');
const { verifyToken } = require('../helpers/generateToken');
const looger = require('../helpers/looger');
const router = express.Router();
const fs = require('fs');

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}
fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file);
    const skip = ['index'].includes(fileWithOutExt);
    if(!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`)); //TODO: localhost/moduloName
        looger.info(`CARGANDO RUTA---> ${fileWithOutExt}`,);
    }
});

router.get('*', async (req, res) => {
    const tokenData = await verifyToken(req.body.token);
    looger.info(`Not found Route --- host: ${req.headers.host} peticion usuario: ${JSON.stringify(tokenData.id)}`);
    res.status(404).send({error: 'Not found route'});
});

module.exports = router;