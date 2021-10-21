const express = require('express');
const router = express.Router();
const { index, getItem, createdItem, updatedItem, deletedItem, activeUser } = require('../controllers/PermissionController');
const { checkAuth } = require('../middleware/authjwt');
const { checkRoleAuth } = require('../middleware/roleAuth');

router.get('/', [checkAuth, checkRoleAuth()], index); //TODO: localhost/users/ ---> lista 
router.get('/:id', [checkAuth, checkRoleAuth()], getItem); //TODO: localhost/users/:id ---> DETALLE 
router.post('/', [checkAuth, checkRoleAuth()], createdItem); //TODO: localhost/users/ ---> lista 
router.put('/:id', [checkAuth, checkRoleAuth()], updatedItem); //TODO: localhost/users/ ---> lista 
router.delete('/:id',[checkAuth, checkRoleAuth()], deletedItem); //TODO: localhost/users/ ---> lista 
router.post('/:id', [checkAuth, checkRoleAuth()], activeUser); //TODO: localhost/users/ ---> lista 

module.exports = router;