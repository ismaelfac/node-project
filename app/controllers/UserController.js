const { httpError } = require('../helpers/handleError');
const UsersSchema  = require('../models/users');

const index = async (req, res) => {
    try {
        res.send(await UsersSchema.find());
    } catch (e) {
        httpError(res, e)
    } 
}

const getItem = async (req, res) => {
    try {
        const id = req.body.userId;
        res.status(201).send(await UsersSchema.findById(id));
    } catch (e) {
        httpError(res, e)
    } 
}

const createdItem = async (req, res) => {
    try {
        const { name, email, password, roles, avatar, isActive } = req.body;
        const newUser = new UsersSchema({
            name, 
            email, 
            password: await UsersSchema.encryptPassword(password),
            roles,
            avatar,
            isActive
        })
        const saveUser = await newUser.save();
        res.status(201).send({ data: saveUser })        
    } catch (e) {
        httpError(res, e)
    }
}

const updatedItem = async (req, res) => {
    try {
        res.status(200).send(await UsersSchema.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }));
    } catch (e) {
        httpError(res, e)
    }
}

const deletedItem = async (req, res) => {
    try {
        const UserFound = await UsersSchema.findById(req.params.id)
        const deleteUSer = await UsersSchema.findByIdAndUpdate(UserFound, {isActive: false}, {
            new: true
        })
        res.status(200).send(deleteUSer)
    } catch (e) {
        httpError(res, e)
    }
}

const activeUser = async (req, res) => {
    try {
        const UserFound = await UsersSchema.findById(req.params.id)
        const activeUser = await UsersSchema.findByIdAndUpdate(UserFound, {isActive: true}, {
            new: true
        })
        res.status(200).send(activeUser)
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { index, getItem, createdItem, updatedItem, deletedItem, activeUser }