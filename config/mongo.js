const mongoose = require('mongoose');
const looger = require('../app/helpers/looger');

const dbConnect = () => {
    const DB_HOST = process.env.DB_HOST;
    mongoose.connect(DB_HOST, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true, 
        useUnifiedTopology: true
    }, err => {
        if(err) {
            looger.info('****** Conexion Errada *******');
            process.exit(1);
        }else{
            looger.info('Conexion a la Base de Datos Exitosa');
        }
    },
        process.on('signup', () => {
            mongoose.connection.close(()=> {
                looger.info('DB is Closed');
                process.exit(0);
            })
        })
    );
}

module.exports = { dbConnect }