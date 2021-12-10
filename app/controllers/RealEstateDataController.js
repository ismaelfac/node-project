const { httpError } = require('../helpers/handleError');
const RealEstateDataSchema  = require('../models/real_estate_data');
const DocumentContractSchema  = require('../models/documents_contract');

const index = async (req, res) => {
    try {
        res.send(await RealEstateDataSchema.find({}));
    } catch (e) {
        httpError(res, e)
    } 
}

const indexFreeProperty = async (req, res) => {
    try {
        res.send(await RealEstateDataSchema.find({state: 'Libre'}));
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = async (req, res) => {
    try {
        const ListAll = await RealEstateDataSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const createdItem = async (req, res) => {
    try {
        const { propertyType, address, garages, useful_room, cannonLease, adminValue } = req.body;
        const resDetail = await RealEstateDataSchema.create({
            propertyType, address, garages, useful_room, cannonLease, adminValue
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

const documentsEstate = async (req, res) => {
    try {
        res.send(await DocumentContractSchema.find({category: 'Inmueble'}));
    } catch (e) {
        httpError(res, e)
    }
}


module.exports = module.exports = { index, indexFreeProperty, getItem, createdItem, updatedItem, deletedItem, documentsEstate }