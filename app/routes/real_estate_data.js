const express = require('express');
const router = express.Router();
const { index, getItem, createdItem, updatedItem, deletedItem } = require('../controllers/RealEstateDataController');
const { checkAuth } = require('../middleware/authjwt');
const { checkRoleAuth } = require('../middleware/roleAuth');

router.get('/', [], index); //TODO: localhost/users/ ---> lista 
router.get('/:id', [checkAuth, checkRoleAuth()], getItem); //TODO: localhost/users/:id ---> DETALLE 
router.post('/', [checkAuth, checkRoleAuth()], createdItem); //TODO: localhost/users/ ---> lista 
router.patch('/:id', [checkAuth, checkRoleAuth()], updatedItem); //TODO: localhost/users/ ---> lista 
router.delete('/:id', [checkAuth, checkRoleAuth()], deletedItem); //TODO: localhost/users/ ---> lista 
//NTGTH-VMP1E-AXQ8W-R4MZJ
module.exports = router;