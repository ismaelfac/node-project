const { httpError } = require('../helpers/handleError');
const looger = require('../helpers/looger');
const PeopleSchema  = require('../models/people');
const peopleJson = require('../json/people.json');

const createPeopleSystem = async () => {
    try {
        await peopleJson.map(item => {
            const newPeople = new PeopleSchema({
                dni: item.dni,
                type_dni: item.type_dni,
                names: item.names,
                slug: '',
                phone: item.phone,
                landline: item.landline,
                email: item.email,
                address: item.address,
                country_id: item.country_id,
                departament_id: item.departament_id,
                municipality_id: item.municipality_id,
                location_id: item.location_id,
                neighborhood_id: item.neighborhood_id,
                latitude: item.latitude,
                longitude: item.longitude,
                birthdate: item.birthdate,
                isActive: item.isActive
            });
            newPeople.save();
            looger.info('Cargando datos de People')
        });       
    } catch(e){
        httpError(res, e)  
    }
}

const dropPeopleSystem = async (req, res) => {

}
module.exports = { createPeopleSystem, dropPeopleSystem }