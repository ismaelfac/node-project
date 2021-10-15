const { httpError } = require('../helpers/handleError');
const RoleSchema  = require('../models/roles');
const rolesJson = require('../json/roles.json');

const createRoleSystem = async () => {
    try {
        await rolesJson.map(item => {
            const newRoles = new RoleSchema({
                names: item.names,
                special: item.special,
                isActive: item.isActive
            });
            newRoles.save();
        });       
    } catch(e){
        httpError(res, e)  
    }
}
module.exports = { createRoleSystem }