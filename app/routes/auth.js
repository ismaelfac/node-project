const express = require('express');
const router = express.Router();
const { signin, signup } = require('../controllers/AuthController');

router.post('/signin', signin); //TODO: localhost/users/ ---> lista 
router.post('/signup', signup); //TODO: localhost/users/ ---> lista 

module.exports = router;