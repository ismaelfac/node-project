const express = require('express');
const router = express.Router();
const { index, getItem, createdItem, updatedItem, deletedItem } = require('../controllers/ContractActorsController');
const checkOrigin = require('../middleware/origin');

router.get('/', index); //TODO: localhost/users/ ---> lista 
router.get('/:id', getItem); //TODO: localhost/users/:id ---> DETALLE 
router.post('/', checkOrigin, createdItem); //TODO: localhost/users/ ---> lista 
router.patch('/:id', updatedItem); //TODO: localhost/users/ ---> lista 
router.delete('/:id', deletedItem); //TODO: localhost/users/ ---> lista 

module.exports = router;