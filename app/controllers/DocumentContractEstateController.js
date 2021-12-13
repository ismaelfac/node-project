const { httpError } = require('../helpers/handleError');
const looger = require('../helpers/looger');
const DocumentContractEstateSchema  = require('../models/documents_contract_estate')

const index = async (req, res) => {
    try {
        const ListAll = await DocumentContractEstateSchema.find({isActive: true}).populate({path:"real_estate_datas", select: 'address'})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const getItem = async (req, res) => {
    try {
        const ListAll = await DocumentContractEstateSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const createdItem = async (req, res) => {
    try {
        console.log(req.body)
        const { realEstateId, documentsContractId, state } = req.body;
        //const { files } = req;
        //looger.info('Entro a DocumentContractEstateSchema: ', realEstateId, documentsContractId);
        // const resDetail = await DocumentContractEstateSchema.create({
        //     contractActorsId, documentsContractId, files, state
        // })
        //res.status(201).send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

const updatedItem = (req, res) => {
    
}

const deletedItem = (req, res) => {
    
}


module.exports = module.exports = { index, getItem, createdItem, updatedItem, deletedItem }