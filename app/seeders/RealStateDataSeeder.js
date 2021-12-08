const looger = require('../helpers/looger');
const RealStateDataJson = require('../json/real_state_data.json');
const RealEstateData = require('../models/real_estate_data');

const createRealStateDataSystem = async () => {
    try {
        await RealStateDataJson.map(item => {
            const newRealStateData = new RealEstateData({
                domus: item.domus,
                propertyType: item.propertyType,
                address: item.address,
                garages: item.garages,
                useful_room: item.useful_room,
                state: item.state,
                isActive: item.isActive
            });
            newRealStateData.save();
            looger.info(`Cargando nueva Propiedad ${newRealStateData}`)
        });       
    } catch(e){
        looger.info('Error cargando nueva Propiedad',e);  
    }
}

const dropRealStateDataSystem = async () => {

}
module.exports = { createRealStateDataSystem, dropRealStateDataSystem }