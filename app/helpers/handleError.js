const looger = require('../helpers/looger');
const httpError = (res, err) => {
    res.status(400).send({error: err});
    looger.info(err);
}
module.exports = { httpError }