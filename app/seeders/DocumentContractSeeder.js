const looger = require('../helpers/looger');
const DocumentContractSchema  = require('../models/documents_contract');
const DocumentContractJson = require('../json/document_contract.json');

const createDocumentContractSystem = async () => {
    try {
        await DocumentContractJson.map(async (item) => {
            const newDocumentContract = new DocumentContractSchema({
                title: item.title,
                description: item.description,
                category: item.category,
                state: item.state
            });
            newDocumentContract.save();
            looger.info('Cargando Nuevo Documento de Contrato', newDocumentContract)
        });       
    } catch(e){
        looger.info('Error cargando Documento de Contrato',e);  
    }
}

const dropDocumentContractSystem = async () => {

}
module.exports = { createDocumentContractSystem, dropDocumentContractSystem }