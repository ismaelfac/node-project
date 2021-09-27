const { httpError } = require('../helpers/handleError');
const ContractsSchema  = require('../models/contracts')

const index = async (req, res) => {
    try {
        const ListAll = await ContractsSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const getItem = async (req, res) => {
    try {
        const ListAll = await ContractsSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const createdItem = async (req, res) => {
    try {
        const { contractNum, name, asegurable, domus, isActive, real_estate_data } = req.body;
        const resDetail = await ContractsSchema.create({
            contractNum, name, asegurable, domus, isActive, real_estate_data
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