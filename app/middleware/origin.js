const checkOrigin = (req, res, next) => {
    const token = req.headers.authorization.split(' ').pop();
    console.log(token);
    if (token === '123456') { 
        next();
    }else{ 
        res.status(409); res.send({error: 'Acceso denegado'}) 
    }
}

module.exports = checkOrigin; 