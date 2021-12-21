const looger = require('../helpers/looger');
const DocumentContractEstateSchema  = require('../models/documents_contract_estate');

const createDocumentContractEstateSystem = async () => {
    try {
        await DocumentContractJson.map(async (item) => {
            const newDocumentContract = new DocumentContractEstateSchema({
                
            });
            newDocumentContract.save();
            looger.info('Cargando Nuevo Documento de Contrato', newDocumentContract)
        });       
    } catch(e){
        looger.info('Error cargando Documento de Contrato',e);  
    }
}

const dropDocumentContractEstateSystem = async () => {

}
module.exports = { createDocumentContractEstateSystem, dropDocumentContractEstateSystem }