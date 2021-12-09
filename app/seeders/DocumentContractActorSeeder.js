const looger = require('../helpers/looger');
const DocumentContractActorsSchema  = require('../models/documents_contract_actors');
const ContractsJson = require('../json/contracts.json');
const ContractsSchema = require('../models/contracts');
const ContractActorsSchema  = require('../models/contract_actors');
const DocumentContractSchema = require('../models/documents_contract')
const DocumentContractActorsJson = require('../json/document_contract_actors.json');
const TypeActorSchema = require('../models/type_actors')
const createDocumentContractActorSystem = async () => {
    try {        
        ContractsJson.map(async (item) => {
            let i = ContractsJson.indexOf(item);    
            const itemContract = await ContractsSchema.find({contractNum: item.contractNum});
            const itemContractActors = await ContractActorsSchema.find({contractId: itemContract[0]._id});
            itemContractActors.map((itemContractActor) => {
                let actor = TypeActorSchema.find({_id: itemContractActor.actorId}) 
                looger.info(`Itemracion ${i} - ${actor}`)
            })
        });
    } catch(e){
        looger.info('Error cargando Documento de Contrato',e);  
    }
}

const dropDocumentContractActorSystem = async () => {

}
module.exports = { createDocumentContractActorSystem, dropDocumentContractActorSystem }