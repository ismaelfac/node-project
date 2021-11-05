const looger = require('../helpers/looger');
const ContractActorsSchema  = require('../models/contract_actors');
const ContractsSchema = require('../models/contracts');
const PeopleSchema = require('../models/people');
const TypeActorsSchema = require('../models/type_actors');
const ContractActorsJson = require('../json/contract_actors.json');

const createContractActorSystem = async () => {
    looger.info('json: ',ContractActorsJson)
    try {
        await ContractActorsJson.map(async (item) => {
            if(item) {
                looger.info('item: ',item);
                const itemContractId = await ContractsSchema.find({contractNum: item.contractNum});
                const itemPersonId = await PeopleSchema.find({dni: item.dni });
                const itemActorId = await TypeActorsSchema.find({nameActor: item.actor});
                const newContractActor = new ContractActorsSchema({
                    contractId: itemContractId._id,
                    peopleId: itemPersonId._id,
                    actorId: itemActorId._id,
                    typePerson: item.typePerson,
                    PeoplelegalRepresentative: itemPersonId._id,
                });
                //newContractActor.save();
                looger.info('Cargando Nuevo Actor de Contrato', item);
                looger.info(itemContractId._id);
                looger.info(itemPersonId._id);
                looger.info('Actor'+itemActorId._id);
                looger.info('Representante'+itemPersonId._id);
                looger.info('Termino el Bloque');
            }else{
                looger.info('Error de carga de documento',item);
            }
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