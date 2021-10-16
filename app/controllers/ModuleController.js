const { httpError } = require('../helpers/handleError');
const ModulesSchema = require('../models/modules');

const index = async (req, res) => {
    try {
        const ListAll = await ModulesSchema.find({isActive: true});
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const getItem = async (req, res) => {
    try {
        const ListAll = await ModulesSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const createdItem = async (req, res) => {
    try {
        const { name, email, password, roles, avatar, isActive } = req.body;
        const foundRoles = await RoleSchema.find({name: {$in: roles}});
        const newUser = new ModulesSchema({
            name, 
            email, 
            password: await ModulesSchema.encryptPassword(password),
            roles: foundRoles[0]._id,
            avatar,
            isActive
        })
        const saveUser = await newUser.save();
        res.status(201).send({ data: saveUser });        
    } catch (e) {
        httpError(res, e);
    }
}

const updatedItem = async (req, res) => {
    try {
        const updateUSer = await ModulesSchema.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).send(updateUSer)
    } catch (e) {
        httpError(res, e)
    }
}

const deletedItem = async (req, res) => {
    try {
        const UserFound = await ModulesSchema.findById(req.params.id)
        const deleteUSer = await ModulesSchema.findByIdAndUpdate(UserFound, {isActive: false}, {
            new: true
        })
        res.status(200).send(deleteUSer)
    } catch (e) {
        httpError(res, e)
    }
}

const activeUser = async (req, res) => {
    try {
        const UserFound = await ModulesSchema.findById(req.params.id)
        const activeUser = await ModulesSchema.findByIdAndUpdate(UserFound, {isActive: true}, {
            new: true
        })
        res.status(200).send(activeUser)
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { index, getItem, createdItem, updatedItem, deletedItem, activeUser }