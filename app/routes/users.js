const express = require('express');
const router = express.Router();
const { index, getItem, createdItem, updatedItem, deletedItem, activeUser } = require('../controllers/UserController');
const checkOrigin = require('../middleware/origin');

router.get('/', index); //TODO: localhost/users/ ---> lista 
router.get('/:id', checkOrigin, getItem); //TODO: localhost/users/:id ---> DETALLE 
router.post('/', checkOrigin, createdItem); //TODO: localhost/users/ ---> lista 
router.put('/:id', checkOrigin, updatedItem); //TODO: localhost/users/ ---> lista 
router.delete('/:id', deletedItem); //TODO: localhost/users/ ---> lista 
router.post('/:id', activeUser); //TODO: localhost/users/ ---> lista 

module.exports = router;