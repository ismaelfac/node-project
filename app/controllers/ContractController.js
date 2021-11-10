const { getParsedCommandLineOfConfigFile } = require('typescript');
const { httpError } = require('../helpers/handleError');
const looger = require('../helpers/looger');
const ContractsSchema  = require('../models/contracts');

const index = async (req, res) => {
    try {
        const listContracts = [];
        const contracts = await ContractsSchema.aggregate([
            {
                $match: {
                    isActive: true
                }
            },
            {
                $lookup: {
                    from: 'real_estate_datas',
                    localField: 'real_estate_data',
                    foreignField: '_id',
                    as: 'real_estate_data',
                    pipeline: [
                        {
                            $project: {
                                'address': 1
                            }
                        }
                    ]
                }
            },
            { $unwind: '$real_estate_data'},
            {
                $lookup: {
                    from: 'users',
                    localField: 'adviser',
                    foreignField: '_id',
                    as: 'adviser',
                    pipeline: [
                        {
                            $project: {
                                'name': 1
                            }
                        }
                    ]
                }
            },
            { $unwind: '$adviser'},
            {
                $lookup: {
                    from: 'contract_actors',
                    as: 'contractActors',
                    let: {
                        id: '$_id', 
                    },
                    pipeline: [
                        {    
                            $match: {
                                $expr: { $eq: ['$contractId', '$$id']}
                            }
                        },
                        {
                            $lookup: {
                                from: 'peoples',
                                localField: 'peopleId',
                                foreignField: '_id',
                                as: 'peopleActor'
                            }
                        },
                        {
                            $lookup: {
                                from: 'type_actors',
                                localField: 'actorId',
                                foreignField: '_id',
                                as: 'typeActor'
                            }                        
                        },
                        {
                            $lookup: {
                                from: 'peoples',
                                localField: 'peoplelegalRepresentative',
                                foreignField: '_id',
                                as: 'PeopleLegalRepresentative'
                            }
                        },
                        { 
                            $project: { 
                                'peopleActor.names': 1,  
                                'typeActor.nameActor': 1,
                                'PeopleLegalRepresentative.names': 1,
                                'typePerson': 1
                            }
                        }
                    ]            
                }            
            }
        ]);
        contracts.map(contract => {
            let arrendatario = '';
            let deudores = 0;
            contract.contractActors.map(contractActor => {
                if(contractActor.typeActor[0].nameActor === "ARRENDATARIO") { arrendatario = contractActor.peopleActor[0].names }
            });
            contract.contractActors.map(contractActor => {
                if(contractActor.typeActor[0].nameActor === "DEUDOR") { deudores = deudores+1 }
            });
            listContracts.push(
                { 
                    'contractNum' : contract.contractNum,
                    'arrendatario' : arrendatario,
                    'deudores': deudores,
                    'address': contract.real_estate_data.address,
                    'state': contract.isActive,
                    'adviser': contract.adviser.name
                }
            )
        })
       res.status(200).json(listContracts);
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
        })
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