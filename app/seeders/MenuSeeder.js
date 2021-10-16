const { httpError } = require('../helpers/handleError');
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
            
        });       
    } catch(e){
        httpError(res, e)  
    }
}

const dropMenusSystem = async (req, res) => {

}
module.exports = { createMenuSystem, dropMenusSystem }