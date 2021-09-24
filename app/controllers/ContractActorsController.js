const { httpError } = require('../helpers/handleError');
const mongoose = require('mongoose');
const ContractActorsSchema  = require('../models/contract_actors')
const people = require('../models/people');
const contracts = require('../models/contracts');
const type_actors = require('../models/type_actors');

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
        const getContractActors = [];
        const resultContractActors = await ContractActorsSchema.findById(_id)
        if(!resultContractActors){
            res.status(404).send("No se encontro registro")
        }else{
            const resultTypeActors = await type_actors.find(
                {_id: resultContractActors.actorId}
            ).select('nameActor')
            console.log('resultado actor: '+resultTypeActors[0].nameActor)

            const resultPeople = await people.find(
                {_id: resultContractActors.peopleId}
            )
            console.log('resultado people: '+resultPeople[0].names)

            const resultContract = await contracts.find(
                { _id: resultContractActors.contractId }
            ).select('name')
            console.log('resultado contrato: '+resultContract[0].name)
            
            const resultPeopleRepresentante = await people.find(
                { _id: resultContractActors.PeoplelegalRepresentative }
            ).select('names')
            console.log('resultado represante legal: '+resultPeopleRepresentante[0].names)
            getContractActors.push([
                { 
                    "arrendatario": {
                        "typeActors": resultTypeActors,
                        "actorsName": resultPeople,
                    }
                }
            ]);
            console.log('resultado'+getContractActors);
            res.status(200).send({ data: resultContractActors })
        }
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