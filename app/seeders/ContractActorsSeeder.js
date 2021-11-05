const looger = require('../helpers/looger');
const ContractActorsSchema  = require('../models/contract_actors');
const ContractsSchema = require('../models/contracts');
const PeopleSchema = require('../models/people');
const TypeActorsSchema = require('../models/type_actors');
const ContractActorsJson = require('../json/contract_actors.json');

const createContractActorSystem = async () => {
    try {
        ContractActorsJson.map(async(item) => {
            const itemContractId = await ContractsSchema.find({ contractNum: item.contractNum });
            const itemPersonId = await PeopleSchema.find({dni: item.dni });
            const itemActorId = await TypeActorsSchema.find({nameActor: item.actor});
            const itemPersonLegalRepresentative = await PeopleSchema.find({dni: item.peoplelegalRepresentative})
            looger.info(itemPersonLegalRepresentative.length)
            const newContractActor = new ContractActorsSchema({
                contractId: itemContractId[0]._id,
                peopleId: itemPersonId[0]._id,
                actorId: itemActorId[0]._id,
                typePerson: item.typePerson,
                peoplelegalRepresentative: (itemPersonLegalRepresentative.length === 0 ? '' : itemPersonLegalRepresentative[0]._id),
            });
            newContractActor.save();
            looger.info('Cargando Nuevo Actor de Contrato', newContractActor);
            looger.info('Termino el Bloque');   
        })      
    } catch(e){
        looger.info('Error cargando Autor del Contrato',e);  
    }
}

const dropContractActorSystem = async () => {}

module.exports = { createContractActorSystem, dropContractActorSystem }