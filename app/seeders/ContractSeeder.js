const looger = require('../helpers/looger');
const UsersSchema  = require('../models/users');
const ContractsSchema = require('../models/contracts');
const RealEstateData = require('../models/real_estate_data');
const ContractsJson = require('../json/contracts.json');

const createContractSystem = async () => {
    try {
        await ContractsJson.map(async (item) => {
            const newRamdomRealState = await RealEstateData.find().limit(3);
            const newRamdonUser = await UsersSchema.find().limit(3);
            let i = ContractsJson.indexOf(item);
            const newContract = new ContractsSchema({
                contractNum: item.contractNum,
                name: item.name,
                asegurable: item.asegurable,
                domus: item.domus,
                cannonLease: item.cannonLease,
                adminValue: item.adminValue,
                contractPeriod: item.contractPeriod,
                increment: item.increment,
                contractRights: item.contractRights,
                deliveryDate: new Date(parseInt(item.deliveryDate)),
                gracePeriod: item.gracePeriod,
                clause: item.clause,
                isActive: item.isActive,
                real_estate_data: newRamdomRealState[i]._id,
                adviser: newRamdonUser[i]._id
            });
            newContract.save();
            looger.info('Cargando Nuevo Contrato', newContract)
        });       
    } catch(e){
        looger.info('Error cargando Contrato',e);  
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

const dropContractSystem = async () => {

}
module.exports = { createContractSystem, dropContractSystem }