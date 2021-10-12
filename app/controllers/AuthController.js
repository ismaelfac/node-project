const { httpError } = require('../helpers/handleError');
const { tokenSing } = require('../helpers/generateToken');
const userModel  = require('../models/users');

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            res.status(404).send({error: "User not found"})
        }else{
            const comparePassword = await userModel.comparePassword(password, user.password);
            if(!comparePassword){
                res.status(401).json({token: null, message: 'Invalid password'});
            }else{
                const token = tokenSing(user);
                console.log(token)
                res.status(201).send({ token: token });
            }     
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