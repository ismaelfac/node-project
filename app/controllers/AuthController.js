const { httpError } = require('../helpers/handleError');
const userModel  = require('../models/users')

const signin = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        res.status(201).send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

const signup = async (req, res) => {
    try {
        res.send('signup')
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { signin, signup }