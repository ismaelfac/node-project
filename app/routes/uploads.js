const express = require('express');
const router = express.Router();
const upload = require('../helpers/upload');
const { uploadController }  = require('../controllers/UploadController');
const checkOrigin = require('../middleware/origin');

router.post('/', [checkOrigin, upload.single('file')] , uploadController); //TODO: localhost/users/ ---> lista 

module.exports = router;