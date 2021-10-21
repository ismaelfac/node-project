const { httpError } = require('../helpers/handleError');
const MenuSchema  = require('../models/menus');
const RoleSchema  = require('../models/roles');
const MenuRoleSchema  = require('../models/menu_roles');

const index = async (req, res) => {
    try {
        res.send(await MenuSchema.find().select(['names', 'description', 'link', 'methods', 'parent', 'order', 'level']));
    } catch (e) {
        httpError(res, e)
    } 
}

const getItem = async (req, res) => {
    try {
        const ListAll = await MenuRoleSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const createdItem = async (req, res) => {
    try {
        const { name } = req.body;
        const resDetail = await MenuRoleSchema.create({
            name
        })
        res.status(201).send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

const updatedItem = async (req, res) => {
    try {
        const updateRole = await MenuRoleSchema.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).send(updateRole)
    } catch (e) {
        httpError(res, e)
    }
}

const deletedItem = async (req, res) => {
    try {
        const deleteRole = await MenuRoleSchema.findByIdAndDelete(req.params.id);
        res.status(204).send(deleteRole);
    } catch (e) {
        httpError(res, e)
    }
}


module.exports = module.exports = { index, getItem, createdItem, updatedItem, deletedItem }