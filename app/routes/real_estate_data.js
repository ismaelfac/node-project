const express = require('express');
const router = express.Router();
const { index, getItem, createdItem, updatedItem, deletedItem } = require('../controllers/RealEstateDataController');
const {checkOrigin} = require('../middleware/origin');
const { checkRoleAuth } = require('../middleware/roleAuth');

router.get('/', [checkOrigin, checkRoleAuth(['ADMIN', 'JURIDICA', 'ASESOR'])], index); //TODO: localhost/users/ ---> lista 
router.get('/:id', [checkOrigin, checkRoleAuth(['ADMIN', 'JURIDICA', 'ASESOR'])], getItem); //TODO: localhost/users/:id ---> DETALLE 
router.post('/', [checkOrigin, checkRoleAuth(['ADMIN', 'JURIDICA', 'ASESOR'])], createdItem); //TODO: localhost/users/ ---> lista 
router.patch('/:id', [checkOrigin, checkRoleAuth(['ADMIN', 'JURIDICA', 'ASESOR'])], updatedItem); //TODO: localhost/users/ ---> lista 
router.delete('/:id', [checkOrigin, checkRoleAuth(['ADMIN'])], deletedItem); //TODO: localhost/users/ ---> lista 
//NTGTH-VMP1E-AXQ8W-R4MZJ
module.exports = router;