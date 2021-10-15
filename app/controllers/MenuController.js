const { httpError } = require('../helpers/handleError');
const MenuSchema  = require('../models/menus');
const menusJson = require('../json/menus.json');

const index = async (req, res) => {
    try {
        //createSystem();
        const ListAll = await MenuSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const getItem = async (req, res) => {
    try {
        const ListAll = await MenuSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const createdItem = async (req, res) => {
    try {
        const { names, description, level, order, parent, link, icon, isActive  } = req.body;
        const resDetail = await MenuSchema.create({
            names, 
            description, 
            level, 
            order, 
            parent, 
            link, 
            icon, 
            isActive 
        });            
        res.status(201).send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

const updatedItem = async (req, res) => {
    try {
        const updateRole = await MenuSchema.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).send(updateRole)
    } catch (e) {
        httpError(res, e)
    }
}

const deletedItem = async (req, res) => {
    try {
        const deleteRole = await MenuSchema.findByIdAndDelete(req.params.id);
        res.status(204).send(deleteRole);
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = module.exports = { index, getItem, createdItem, updatedItem, deletedItem }