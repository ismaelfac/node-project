const express = require('express');
const router = express.Router();
const upload = require('../helpers/upload');
const { uploadController }  = require('../controllers/UploadController');
const { checkAuth } = require('../middleware/authjwt');
const { checkRoleAuth } = require('../middleware/roleAuth');

router.post('/', [upload.single('file')], uploadController); //TODO: localhost/users/ ---> lista 

module.exports = router;