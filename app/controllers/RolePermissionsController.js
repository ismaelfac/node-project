const { httpError } = require('../helpers/handleError');
const RolePermissionsSchema = require('../models/roles_permissions');
const RoleSchema  = require('../models/roles');
const PermissionsSchema = require('../models/permissions');

const index = async (req, res) => {
    try {
        const ListAll = await RolePermissionsSchema.find({isActive: true}).populate({path:"roles", select: 'name'});
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const getItem = async (req, res) => {
    try {
        const ListAll = await RolePermissionsSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const createdItem = async (req, res) => {
    try {
        const { roleId, permissionId, isActive } = req.body;
        const resDetail = await RolePermissionsSchema.create({
            roleId, permissionId, isActive
        })
        res.status(201).send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

const updatedItem = async (req, res) => {
    try {
        const updateRole = await RolePermissionsSchema.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).send(updateRole)
    } catch (e) {
        httpError(res, e)
    }
}

const deletedItem = async (req, res) => {
    try {
        const deleteRole = await RolePermissionsSchema.findByIdAndDelete(req.params.id);
        res.status(204).send(deleteRole);
    } catch (e) {
        httpError(res, e)
    }
}


module.exports = module.exports = { index, getItem, createdItem, updatedItem, deletedItem }