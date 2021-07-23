const mongoose = require('mongoose');
const { httpError } = require('../helpers/handleError');
const postModel  = require('../models/posts')

const index = async (req, res) => {
    try {
        const ListAll = await postModel.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}
const getItem = async (req, res) => {
    try {
        const resDetail = await postModel.findById(req.params.postId);
        res.status(201).send({ data: resDetail });
    } catch (e) {
        httpError(res, e)
    }
}

const createdItem = async (req, res) => {
    try {
        const { title, description, author, likes } = req.body;
        const resDetail = await postModel.create({
            title, description, author, likes, isActive: true
        });
        res.status(201).send({ data: resDetail });
    } catch (e) {
        httpError(res, e)
    }
}

const updatedItem = (req, res) => {
    
}

const deletedItem = (req, res) => {
    
}

//: METODO DE AGREGACION DE PROPOSITO UNICO

const getFilterPostsWithStateActiveAndOptions = async (req, res) => {
    try {
        const { author } = req.body;
        console.log('****author*****',author);
        const result = await postModel.distinct('title', {
            author: mongoose.Types.ObjectId(`${author}`)
        });
        console.log('****** Result ***********',result);
        res.send({ data: result });
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { index, getItem, createdItem, updatedItem, deletedItem, getFilterPostsWithStateActiveAndOptions }