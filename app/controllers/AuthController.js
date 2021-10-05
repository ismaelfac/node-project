const { httpError } = require('../helpers/handleError');
const userModel  = require('../models/users')

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userFound = await userModel.findOne({email}).populate("roles");
        const comparePassword = await userModel.comparePassword(password, userFound.password);
        if(!comparePassword){
            res.status(401).json({token: null, message: 'Invalid password'});
        }else{
            res.status(201).send({ token: userFound.token });
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