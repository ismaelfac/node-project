const { httpError } = require('../helpers/handleError');
const looger = require('../helpers/looger');
const DocumentContractSchema = require('../models/documents_contract');
const RealEstateDataSchema  = require('../models/real_estate_data');
const DocumentContractEstateSchema  = require('../models/documents_contract_estate')

const index = async (req, res) => {
    try {
        const ListAll = await DocumentContractEstateSchema.find({_id: req.body.realEstateId}).populate({path:"real_estate_datas", select: 'address'})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const getDocumentContractEstateList = async (req, res) => {
    try {
        res.send(await DocumentContractSchema.find({category: 'Inmueble'}).select('title'));//search contract document
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
        const fileUploads = req.file;
        const { realEstateId, documentsContractId, state } = req.body;
        const filename = fileUploads.originalName;
        const description = 'Description Pdf 2';
        const destination = fileUploads.path;
        const size = fileUploads.size;
        const isActive = true;
        looger.info('Entro a DocumentContractEstateSchema: ', fileUploads);
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