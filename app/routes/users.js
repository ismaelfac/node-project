const express = require('express');
const router = express.Router();
const { index, getItem, createdItem, updatedItem, deletedItem } = require('../controllers/UserController');

router.get('/', index);
router.get('/:id', getItem);
router.post('/', createdItem);
router.path('/:id', updatedItem);
router.delete('/:id', deletedItem);

module.exports = router;