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

const createdItem = async (req, res) => {
    try {
        const { title, description, author, likes } = req.body;
        const resDetail = await postModel.create({
            title, description, author, likes, isActive: true
        })
        res.send({ data: resDetail })
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

module.exports = { index, createdItem, updatedItem, deletedItem, getFilterPostsWithStateActiveAndOptions }