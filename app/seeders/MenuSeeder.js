const looger = require('../helpers/looger');
const MenuSchema  = require('../models/menus');
const menusJson = require('../json/menus.json');

const createMenuSystem = async () => {
    try {
        await menusJson.map(item => {
            const newMenus = new MenuSchema({
                names: item.names,
                description: item.description,
                level: item.level,
                order: item.order,
                parent: item.parent,
                link: item.link,
                icon: item.icon,
                isActive: item.isActive
            });
            newMenus.save();
            looger.info('Cargando datos de Menus')
        });       
    } catch(e){
        looger.info('Error cargando User',e);
    }
}

const dropMenusSystem = async () => {

}
module.exports = { createMenuSystem, dropMenusSystem }