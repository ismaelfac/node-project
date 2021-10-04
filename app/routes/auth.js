const express = require('express');
const router = express.Router();
const { signin, signup } = require('../controllers/AuthController');
const checkOrigin = require('../middleware/origin');

router.post('/', signin); //TODO: localhost/users/ ---> lista 
router.post('/', checkOrigin, signup); //TODO: localhost/users/ ---> lista 

module.exports = router;