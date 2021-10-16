const { httpError } = require('../helpers/handleError');
const UsersSchema  = require('../models/users');
const UserJson = require('../json/users.json');

const createUserSystem = async () => {
    try {
        await UserJson.map(item => {
            const newUser = new UsersSchema({
                name: item.name,
                isActive: item.isActive
            });
            newUser.save();
        });       
    } catch(e){
        httpError(res, e)  
    }
}

const dropUserSystem = async (req, res) => {

}
module.exports = { createUserSystem, dropUserSystem }