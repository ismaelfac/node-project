const looger = require('../helpers/looger');
const UsersSchema  = require('../models/users');
const UserJson = require('../json/users.json');
const PeopleSchema = require('../models/people');
const RoleJson = require('../json/roles.json')

const createUserSystem = async () => {
    try {        
        UserJson.map(item => {
            let peopleFound = PeopleSchema.find({email: { $in: item.email}});
            console.log27gjknj8hc3g8x7cqfvjbwpd6
            if(peopleFound){
                const newUser = new UsersSchema({
                    name: item.name, 
                    email: item.email, 
                    password: '123',
                    roles: item.roles,
                    avatar: item.avatar,
                    isActive: item.isActive
                });
                newUser.save();
            }            
            looger.info('Cargando datos de User',newUser.name);
        });       
    } catch(e){
        looger.info('Error cargando User',e);
    }
}

const dropUserSystem = async (req, res) => {

}
module.exports = { createUserSystem, dropUserSystem }