const jwt = require("jsonwebtoken");

const tokenSing = async (user) => {
    return jwt.sign(
        { id: user._id, role: user.roles },
        process.env.JWT_SECRET, { expiresIn: 86400 }
    );
}

const verifyToken = async (token) => {
    try {
        return await jwt.verify(token, process.env.JWT_SECRET)
    }catch (e) {
        return null
    }
}

const decodeSing = async (token) => {

}

module.exports = { tokenSing, verifyToken, decodeSing }