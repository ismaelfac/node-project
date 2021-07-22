const express = require('express');
const router = express.Router();
const { index, createdItem, updatedItem, deletedItem, getFilterPostsWithStateActiveAndOptions } = require('../controllers/PostController');
const checkOrigin = require('../middleware/origin');

router.get('/', index); //TODO: localhost/posts/ ---> lista 
router.get('/:id', getFilterPostsWithStateActiveAndOptions); //TODO: localhost/posts/getFilterPublicationsWithStateActiveAndOptions
router.post('/', checkOrigin, createdItem); //TODO: localhost/posts/ ---> lista 
router.patch('/:id', updatedItem); //TODO: localhost/posts/ ---> lista 
router.delete('/:id', deletedItem); //TODO: localhost/posts/ ---> lista 


module.exports = router;