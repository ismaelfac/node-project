const jwt = require("jsonwebtoken");
const looger = require('../helpers/looger');
const tokenSing = async (user) => {
    return jwt.sign(
        { id: user._id, role: user.roles },
        process.env.APP_KEY, { expiresIn: 86400 }
    );
}

const verifyToken = async (token) => {
    try {
        return await jwt.verify(token, process.env.APP_KEY);
    }catch (e) {
        return null
    }
}


module.exports = { tokenSing, verifyToken }