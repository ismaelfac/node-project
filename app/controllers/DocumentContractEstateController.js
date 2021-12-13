const { httpError } = require('../helpers/handleError');
const DocumentContractActorsSchema  = require('../models/documents_contract_estate')

const index = async (req, res) => {
    try {
        const ListAll = await DocumentContractActorsSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const getItem = async (req, res) => {
    try {
        const ListAll = await DocumentContractActorsSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const createdItem = async (req, res) => {
    try {
        const { contractActorsId, documentsContractId, files, state } = req.body;
        const resDetail = await DocumentContractActorsSchema.create({
            contractActorsId, documentsContractId, files, state
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