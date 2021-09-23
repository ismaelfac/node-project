const { httpError } = require('../helpers/handleError');
const mongoose = require('mongoose');
const ContractActorsSchema  = require('../models/contract_actors')
const People = require('../models/people');
const Contract = require('../models/contracts');
const Actor = require('../models/type_actors');

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
        const result = await Actor.distinct('title', {
            actorId: mongoose.Types.ObjectId("60edcd88c4546228ece1c37f")
        });
        res.status(200).send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const createdItem = async (req, res) => {
    try {
        const { contractId, peopleId, actorId, typePerson, PeoplelegalRepresentative } = req.body;
        const resDetail = await ContractActorsSchema.create({
            contractId, peopleId, actorId, typePerson, PeoplelegalRepresentative
        })
        res.status(201).send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

const updatedItem = async (req, res) => {
    try {
        const { _id } = req.body;
        const findContractActors = ContractActorsSchema.findById(_id)
        if(findContractActors){
            const { contractId, peopleId, actorId, typePerson, PeoplelegalRepresentative } = req.body;
            await ContractActorsSchema.updateMany({
                contractId: contractId, 
                peopleId: peopleId, 
                actorId: actorId, 
                typePerson: typePerson,
                PeoplelegalRepresentative: PeoplelegalRepresentative
            })
            res.status(200).send({ data: ListAll });
        }
    } catch (e) {
        httpError(res, e)
    }
}

const deletedItem = async (req, res) => {
    try {
        const { _id } = req.body;
        const deletedItem = await ContractActorsSchema.findById(_id)
        if(deletedItem){
            const result = await ContractActorsSchema.deleteOne({_id})
            res.status(200).send({ data: result })
        }        
    } catch (e) {
        httpError(res, e)
    } 
}


module.exports = module.exports = { index, getItem, createdItem, updatedItem, deletedItem }