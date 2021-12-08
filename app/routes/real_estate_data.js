const express = require('express');
const router = express.Router();
const { index, indexFreeProperty, getItem, createdItem, updatedItem, deletedItem } = require('../controllers/RealEstateDataController');
const { checkAuth } = require('../middleware/authjwt');
const { checkRoleAuth } = require('../middleware/roleAuth');

router.get('/', [], index); //TODO: localhost/real_estate_data/ ---> lista 
router.get('/freeProperty', [], indexFreeProperty); //TODO: localhost/real_estate_data/indexFreeProperty/ ---> lista 
router.get('/:id', [checkAuth, checkRoleAuth()], getItem); //TODO: localhost/real_estate_data/:id ---> DETALLE 
router.post('/', [checkAuth, checkRoleAuth()], createdItem); //TODO: localhost/real_estate_data/ ---> lista 
router.patch('/:id', [checkAuth, checkRoleAuth()], updatedItem); //TODO: localhost/real_estate_data/ ---> lista 
router.delete('/:id', [checkAuth, checkRoleAuth()], deletedItem); //TODO: localhost/real_estate_data/ ---> lista 
//NTGTH-VMP1E-AXQ8W-R4MZJ
module.exports = router;