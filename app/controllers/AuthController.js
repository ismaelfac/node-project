const { httpError } = require('../helpers/handleError');
const jwt = require("jsonwebtoken");
const userModel  = require('../models/users')
const SECRET = "ALIADOS";

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userFound = await userModel.findOne({email}).populate("roles");
        const comparePassword = await userModel.comparePassword(password, userFound.password);
        if(!comparePassword){
            res.status(401).json({token: null, message: 'Invalid password'});
        }else{
            const token = jwt.sign({id: userFound._id }, SECRET, {
                expiresIn: 86400
            })
            res.status(201).send({ token: token });
        }        
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