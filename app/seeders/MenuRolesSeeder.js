const looger = require('../helpers/looger');
const TypeActorsSchema  = require('../models/type_actors');
const typeActorsJson = require('../json/TypeActors.json');

const createTypeActorsSystem = async () => {
    try {
        await typeActorsJson.map(item => {
            const newTypeActor = new TypeActorsSchema({
                nameActor: item.nameActor,
                isActive: item.isActive
            });
            newTypeActor.save();
            looger.info('Cargando datos de TypeActors', newTypeActor)
        });       
    } catch(e){
        looger.info('Error cargando User',e);  
    }
}

const dropTypeActorssSystem = async () => {

}
module.exports = { createTypeActorsSystem, dropTypeActorssSystem }