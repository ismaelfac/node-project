const { httpError } = require('../helpers/handleError');
const PeopleSchema  = require('../models/people');
const peopleJson = require('../json/people.json');

const createPeopleSystem = async () => {
    try {
        await peopleJson.map(item => {
            const newPeople = new PeopleSchema({
                names: item.names,
                description: item.description,
                level: item.level,
                order: item.order,
                parent: item.parent,
                link: item.link,
                icon: item.icon,
                isActive: item.isActive
            });
            newPeople.save();
        });       
    } catch(e){
        httpError(res, e)  
    }
}

const dropPeopleSystem = async (req, res) => {

}
module.exports = { createPeopleSystem, dropPeopleSystem }