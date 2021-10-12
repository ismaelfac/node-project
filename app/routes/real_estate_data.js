const express = require('express');
const router = express.Router();
const { index, getItem, createdItem, updatedItem, deletedItem } = require('../controllers/RealEstateDataController');
const { checkAuth } = require('../middleware/authjwt');
const { checkRoleAuth } = require('../middleware/roleAuth');

router.get('/', [checkAuth, checkRoleAuth(['ADMIN', 'JURIDICA', 'ASESOR'])], index); //TODO: localhost/users/ ---> lista 
router.get('/:id', [checkAuth, checkRoleAuth(['ADMIN', 'JURIDICA', 'ASESOR'])], getItem); //TODO: localhost/users/:id ---> DETALLE 
router.post('/', [checkAuth, checkRoleAuth(['ADMIN', 'JURIDICA', 'ASESOR'])], createdItem); //TODO: localhost/users/ ---> lista 
router.patch('/:id', [checkAuth, checkRoleAuth(['ADMIN', 'JURIDICA', 'ASESOR'])], updatedItem); //TODO: localhost/users/ ---> lista 
router.delete('/:id', [checkAuth, checkRoleAuth(['ADMIN'])], deletedItem); //TODO: localhost/users/ ---> lista 
//NTGTH-VMP1E-AXQ8W-R4MZJ
module.exports = router;