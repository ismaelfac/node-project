const express = require('express');
const router = express.Router();
const { index, getItem, createdItem, updatedItem, deletedItem } = require('../controllers/MenuController');
const { checkAuth } = require('../middleware/authjwt');
const { checkRoleAuth } = require('../middleware/roleAuth');

router.get('/', [checkAuth], index); //TODO: localhost/users/ ---> lista 
router.get('/:id', [checkAuth], getItem); //TODO: localhost/users/:id ---> DETALLE 
router.post('/', [checkAuth], createdItem); //TODO: localhost/users/ ---> lista 
router.put('/:id', [checkAuth], updatedItem); //TODO: localhost/users/ ---> lista 
router.delete('/:id', [checkAuth],deletedItem); //TODO: localhost/users/ ---> lista 

module.exports = router;