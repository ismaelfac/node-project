const { httpError } = require('../helpers/handleError');
const userModel  = require('../models/users')

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
        const { username, email, password } = req.body;
        const resDetail = await userModel.create({
            username, email, password
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

module.exports = { index, getItem, createdItem, updatedItem, deletedItem }