const looger = require('../helpers/looger');
const UsersSchema  = require('../models/users');
const UserJson = require('../json/users.json');
const PeopleSchema = require('../models/people');
const RoleJson = require('../json/roles.json')

const createUserSystem = async () => {
    try {        
        UserJson.map(async (item) => {
            const peopleFound = await FilterPeopleWithStateActive(item.email);
            if(peopleFound[0]){
                const saveUser = UsersSchema.create({ 
                    personId: peopleFound[0]._id,
                    name: peopleFound[0].names,
                    email: peopleFound[0].email,
                    password: await UsersSchema.encryptPassword(item.password),
                    roles: item.roles,
                    avatar: item.avatar,
                    isActive: item.isActive
                });
                console.log(`Usuario ${saveUser} Creado`);
            }
        });       
    } catch(e){
        looger.info('Error cargando User',e);
    }
}
const FilterPeopleWithStateActive = async (email) => {
    return await PeopleSchema.aggregate([
        {
            $match: { email: email }
        }
    ]);
}
const dropUserSystem = async (req, res) => {

}
module.exports = { createUserSystem, dropUserSystem }