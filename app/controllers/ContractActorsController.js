const { httpError } = require('../helpers/handleError');
const mongoose = require('mongoose');
const ContractActorsSchema  = require('../models/contract_actors')
const people = require('../models/people');
const contracts = require('../models/contracts');
const type_actors = require('../models/type_actors');

const index = async (req, res) => {
    try {
        const contractActorsResult = await ContractActorsSchema.aggregate([
            {
                $lookup:
                {
                    from: "people",
                    localField: "peopleId",
                    foreignField: "_id",
                    as: "people"   
                }
            },
            {
                $lookup:
                {
                    from: "contracts",
                    localField: "contractId",
                    foreignField: "_id",
                    as: "contract"   
                }
            }
        ])
        
        res.send({ data: contractActorsResult })
    } catch (e) {
        httpError(res, e)
    } 
}

const getItem = async (req, res) => {
    try {
        const { contractId } = req.body;
        let getContractActors = [];
        let resultContractActors = await ContractActorsSchema.find({contractId:contractId})
        if(!resultContractActors){
            res.status(404).send("No se encontro registro")
        }else{
            resultContractActors.map(async (actor) => {
                let resultTypeActors = await type_actors.find(
                    {_id: actor.actorId}
                ).select('nameActor')
                
                let resultPeople = await people.find(
                    {_id: actor.peopleId}
                )
                
                let resultContract = await contracts.find(
                    { _id: actor.contractId }
                ).select('name')
                
                let resultPeopleRepresentante = await people.find(
                    { _id: actor.PeoplelegalRepresentative }
                )
                
                getContractActors.push({
                    "typePerson": actor.typePerson,
                    "actor": resultTypeActors,
                    "person": resultPeople,
                    "contract": resultContract,
                    "representanteLegal": resultPeopleRepresentante
                });
                
            })
            console.log('getContractActors: '+JSON.stringify(getContractActors));

            res.status(200).send({ data: resultContractActors });
        }
    } catch (e) {
        httpError(res.status(500).send(error))
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