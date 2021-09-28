const express = require('express');
const router = express.Router();
const { upload } = require('../controllers/UploadController');
const checkOrigin = require('../middleware/origin');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')//TODO: Imagen cruda
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop() //TODO: archivo.pdf -> pdf
        cb(null, `${Date.now()}.${ext}`)
    }
});

let uploadFile = multer({ storage });

router.post('/', [checkOrigin, uploadFile.single('file')] , upload); //TODO: localhost/users/ ---> lista 

module.exports = router;