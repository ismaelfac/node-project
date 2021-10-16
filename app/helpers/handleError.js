const httpError = (res, err) => res.status(400).send({error: err});
module.exports = { httpError }