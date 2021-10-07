const { httpError } = require('../helpers/handleError');
const { string_to_slug } = require('../helpers/slug')
const PermissionsSchema = require('../models/permissions');

const index = async (req, res) => {
    try {
        const ListAll = await PermissionsSchema.find({isActive: true});
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const getItem = async (req, res) => {
    try {
        const ListAll = await PermissionsSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const createdItem = async (req, res) => {
    try {
        const { name, description, action } = req.body;
        const newPermission = new PermissionsSchema({
            name, 
            action,
            description,
            is_system: false
        })
        console.log(newPermission);
        const savePermission = await newPermission.save();
        res.status(201).send({ data: savePermission })        
    } catch (e) {
        httpError(res, e)
    }
}

const updatedItem = async (req, res) => {
    try {
        const updatePermission = await PermissionsSchema.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).send(updatePermission)
    } catch (e) {
        httpError(res, e)
    }
}

const deletedItem = async (req, res) => {
    try {
        const UserFound = await PermissionsSchema.findById(req.params.id)
        const deleteUSer = await PermissionsSchema.findByIdAndUpdate(UserFound, {isActive: false}, {
            new: true
        })
        res.status(200).send(deleteUSer)
    } catch (e) {
        httpError(res, e)
    }
}

const activeUser = async (req, res) => {
    try {
        const UserFound = await PermissionsSchema.findById(req.params.id)
        const activeUser = await PermissionsSchema.findByIdAndUpdate(UserFound, {isActive: true}, {
            new: true
        })
        res.status(200).send(activeUser)
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { index, getItem, createdItem, updatedItem, deletedItem, activeUser }