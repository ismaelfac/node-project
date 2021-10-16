const { httpError } = require('../helpers/handleError');
const looger = require('../helpers/looger');
const RoleSchema  = require('../models/roles');
const rolesJson = require('../json/roles.json');

const createRoleSystem = async () => {
    try {
        await rolesJson.map(item => {
            const newRoles = new RoleSchema({
                name: item.name,
                special: item.special,
                isActive: item.isActive
            });
            newRoles.save();
            looger.info('Cargando datos de Roles')
        });       
    } catch(e){
        httpError(res, e)  
    }
}
module.exports = { createRoleSystem }