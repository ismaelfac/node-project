const looger = require('../helpers/looger');
const MenuSchema  = require('../models/menus');
const RoleSchema  = require('../models/roles');
const MenuRoleSchema  = require('../models/menu_roles');
const MenuJson = require('../json/menus.json');
const RolesJson = require('../json/roles.json');

const createMenuRolesSystem = async () => {
    try {
        await RolesJson.map(role => {
            if(role.special === 'all'){
                MenuJson.map(async (menu) => {
                    const menuFound = await FilterMenu(menu.names);
                    const roleFound = await FilterRole(role.name);
                    if(menuFound && roleFound){
                        const resultFilterMenuRoles = await FilterMenuRoles(menuFound[0]._id);
                        console.log(resultFilterMenuRoles);
                        if(resultFilterMenuRoles){
                            const newMenuRoles = new MenuRoleSchema({
                                menuId: menuFound[0]._id,
                                roleId: roleFound[0]._id,
                                isActive: true
                            });
                            const resultMenuRoles = await newMenuRoles.save();
                            looger.info(`Cargando datos de MenuRoles ${JSON.stringify(menuFound[0].names)} para usuario ${roleFound[0].name}`);
                        }else{
                            looger.info(`Ya existe esta relacion en MenuRoles`);
                        }
                        
                    }else{
                        looger.info(`No existe el Menu o el Role para realizar la relación`);
                    }                    
                })
            }        
        });       
    } catch(e){
        looger.info('Error cargando MenuRole',e);  
    }
}
const FilterMenuRoles = async (menuId) => {
    return await MenuRoleSchema.aggregate([
        {
            $match: { menuId: menuId }
        }
    ]);
}
const FilterMenu = async (name) => {
    return await MenuSchema.aggregate([
        {
            $match: { names: name }
        }
    ]);
}
const FilterRole = async (name) => {
    return await RoleSchema.aggregate([
        {
            $match: { name: name }
        }
    ]);
}
const dropMenuRolesSystem = async () => {

}
module.exports = { createMenuRolesSystem, dropMenuRolesSystem }