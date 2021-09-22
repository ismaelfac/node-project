const { httpError } = require('../helpers/handleError');
const ContractActorsSchema  = require('../models/contract_actors')

const index = async (req, res) => {
    try {
        const ListAll = await ContractActorsSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const getItem = async (req, res) => {
    try {
        const { _id } = req.body;
        const ListAll = await ContractActorsSchema.findById(_id)
        res.status(200).send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const createdItem = async (req, res) => {
    try {
        const { contractId, peopleId, actorId, typePerson } = req.body;
        const resDetail = await ContractActorsSchema.create({
            contractId, peopleId, actorId, typePerson
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