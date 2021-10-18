const express = require('express');
const router = express.Router();
const { index, getItem, createdItem, updatedItem, deletedItem } = require('../controllers/MenuRoleController');
const { checkAuth } = require('../middleware/authjwt');
const { checkRoleAuth } = require('../middleware/roleAuth');

router.get('/', [checkAuth, checkRoleAuth(['SUPER ADMINISTRADOR','ADMIN'])], index); //TODO: localhost/users/ ---> lista 
router.get('/:id', [checkAuth, checkRoleAuth(['ADMIN'])], getItem); //TODO: localhost/users/:id ---> DETALLE 
router.post('/', [checkAuth, checkRoleAuth(['ADMIN'])], createdItem); //TODO: localhost/users/ ---> lista 
router.patch('/:id', [checkAuth, checkRoleAuth(['ADMIN'])], updatedItem); //TODO: localhost/users/ ---> lista 
router.delete('/:id', [checkAuth, checkRoleAuth(['ADMIN'])], deletedItem); //TODO: localhost/users/ ---> lista 

module.exports = router;