const { httpError } = require('../helpers/handleError');
const RealEstateDataSchema  = require('../models/real_estate_data');
const DocumentContractSchema  = require('../models/documents_contract');
const DocumentContractEstateSchema  = require('../models/documents_contract_estate');
const looger = require('../helpers/looger');

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
        looger.info(req.body)
        const { domus, propertyType, address, garages, useful_room } = req.body;
        const resDetail = await RealEstateDataSchema.create({
            domus, propertyType, address, garages, useful_room
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
        const address = 'Cll 86 # 62 - 119 EDIFICIO PALOMINO';
        const DocumentEstate = await DocumentContractSchema.find({category: 'Inmueble'});
        const addressExist = await DocumentContractEstateSchema.find({address: DocumentEstate.address})
        if(addressExist){
            DocumentEstate.map(async (item) => {
                const newDocumentContractEstate = await DocumentContractEstateSchema({
                    documentsContractId: item._id,
                    address: address,
                    filename: '',
                    description: '',
                    destination: '',
                    size: '',
                    state: 'Pendiente'
                });
                newDocumentContractEstate.save();
            });
        }
        const resultDocumentEstate = await DocumentContractEstateSchema.find({address: address});
        res.status(201).send(resultDocumentEstate);
    } catch (e) {
        httpError(res, e)
    }
}


module.exports = module.exports = { index, indexFreeProperty, getItem, createdItem, updatedItem, deletedItem, documentsEstate }