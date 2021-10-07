const jwt = require("jsonwebtoken");
const SECRET = "ALIADOS";
const UsersSchema  = require('../models/users');

const checkOrigin = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers.authorization.split(' ')[1];
    if (token) {
        return jwt.verify(token, SECRET, function(err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: "Failed to authenticate token.",
                });
            }
            req.user = decoded;
            return next();
        });
    }
    return res.unauthorized();
};
const isRole = async (req, res, next) => {
    const user = await UsersSchema.findById(req.body.userId).populate({path:"roles", select: 'name'});
    next();
    console.log(user.roles[0].name)
};

module.exports = {checkOrigin, isRole}; 