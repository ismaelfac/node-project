const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URL = process.env.DB_URL;
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true, 
        useUnifiedTopology: true
    }, err => {
        if(err) {
            console.log('****** Conexion Errada *******');
        }else{
            console.log('****** Conexion Exitosa *******');
        }
    },
        process.on('signup', () => {
            mongoose.connection.close(()=> {
                console.log('DB is Closed');
                process.exit(0);
            })
        })
    );
}

module.exports = { dbConnect }