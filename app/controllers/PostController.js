const BaseRepository = require('../repositories/BaseRepository');
const { httpError } = require('../helpers/handleError');
const postModel  = require('../models/posts')

const index = async (req, res) => {
    try {
        const ListAll = await userModel.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const getItem = async (req, res) => {
    try {
        const ListAll = await userModel.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const createdItem = async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const resDetail = await userModel.create({
            name, age, email
        })
        res.status(201).send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

const updatedItem = (req, res) => {
    
}

const deletedItem = (req, res) => {
    
}


module.exports = module.exports = { index, getItem, createdItem, updatedItem, deletedItem }