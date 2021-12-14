const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');//TODO: Imagen cruda
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop(); //TODO: archivo.pdf -> pdf
        cb(null, `${Date.now()}.${ext}`);
    }
});

const upload = multer({ storage });

module.exports = upload; 