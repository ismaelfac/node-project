const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URL = process.env.DB_URL;
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }, err => {
        if(err) {
            console.log('****** Conexion Errada *******');
        }else{
            console.log('****** Conexion Exitosa *******');
        }
    });
}

module.exports = { dbConnect }