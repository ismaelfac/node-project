const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_HOST = process.env.DB_HOST;
    mongoose.connect(DB_HOST, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true, 
        useUnifiedTopology: true
    }, err => {
        if(err) {
            console.log('****** Conexion Errada *******');
            process.exit(1);
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