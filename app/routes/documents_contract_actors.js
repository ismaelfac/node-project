const express = require('express');
const router = express.Router();
const { index, getItem, createdItem, updatedItem, deletedItem } = require('../controllers/DocumentContractActorsController');
const checkOrigin = require('../middleware/origin');

router.get('/', checkOrigin, index); //TODO: localhost/users/ ---> lista 
router.get('/:id', checkOrigin, getItem); //TODO: localhost/users/:id ---> DETALLE 
router.post('/', checkOrigin, createdItem); //TODO: localhost/users/ ---> lista 
router.patch('/:id', checkOrigin, updatedItem); //TODO: localhost/users/ ---> lista 
router.delete('/:id', checkOrigin, deletedItem); //TODO: localhost/users/ ---> lista 

module.exports = router;