const { httpError } = require('../helpers/handleError');
const looger = require('../helpers/looger');
const ContractsSchema  = require('../models/contracts');

const index = async (req, res) => {
    try {
        looger.info('entro contract Indicacions');
        res.send(await ContractsSchema.find().populate({path:"real_estate_datas", select: 'address'}));
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

const updatedItem = async (req, res) => {
    try {
        const updateContract = await ContractsSchema.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).send(updateContract)
    } catch (e) {
        httpError(res, e)
    }
}

const deletedItem = async (req, res) => {
    try {
        const deleteContract = await ContractsSchema.findByIdAndDelete(req.params.id);
        res.status(204).send(deleteContract);
    } catch (e) {
        httpError(res, e)
    }
}


module.exports = module.exports = { index, getItem, createdItem, updatedItem, deletedItem }