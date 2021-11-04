const looger = require('../helpers/looger');
const ContractActorsSchema  = require('../models/contract_actors');
const ContractsSchema = require('../models/contracts');
const PeopleSchema = require('../models/people');
const TypeActorsSchema = require('../models/type_actors');
const ContractsJson = require('../json/contracts.json');

const createContractActorSystem = async () => {
    try {
        await ContractsJson.map(async (item) => {
            let i = ContractsJson.indexOf(item);
            const ItemContractNum = await ContractsSchema.find({contractNum: item.contractNum}).limit(i);
            const ItemPeople = await PeopleSchema.find().limit(10);
            const ItemTypeActor = await TypeActorsSchema.find().limit(4);
            const typePersonRandom = Math.random();
            const newContractActor = new ContractActorsSchema({
                contractId: ItemContractNum[0]._id,
                peopleId: ItemPeople[i]._id,
                actorId: ItemTypeActor[i]._id,
                typePerson: 'Natural',
                PeoplelegalRepresentative: ItemPeople[i+1]._id,
            });
            //newContractActor.save();
            looger.info('Cargando Nuevo Actor de Contrato', newContractActor);
            looger.info(ItemContractNum[0]._id);
            looger.info(ItemPeople[i]._id);
            looger.info('Actor'+ItemTypeActor[i]._id);
            looger.info('Representante'+ItemPeople[i+1]._id);
            looger.info('Rango Persona'+typePersonRandom);
            looger.info('Termino el Bloque');
        });       
    } catch(e){
        looger.info('Error cargando Nuevo Actor Contrato',e);  
    }
}

const FilterRealStateData = async () => {
    return await RealEstateData.findOne();
}
const FilterUser = async () => {
    return await UsersSchema.aggregate([
        {
            $match: { isActive: true }
        }
    ]);
}

const dropContractActorSystem = async () => {

}
module.exports = { createContractActorSystem, dropContractActorSystem }