const { httpError } = require('../helpers/handleError');
const looger = require('../helpers/looger');
const ContractsSchema  = require('../models/contracts');
const ContractActorsSchema  = require('../models/contract_actors');

const index = async (req, res) => {
    try {
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
                    as: 'real_estate_data'
                }
            },
            { $unwind: '$real_estate_data'},
            {
                $lookup: {
                    from: 'users',
                    localField: 'adviser',
                    foreignField: '_id',
                    as: 'adviser'
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
                            $project: { 'peopleActor.last_name': 1, 'peopleActor.first_name': 1, 'peopleActor.business_name': 1 }
                        }
                    ]
                },
            }
        ])
        res.json({contracts});
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