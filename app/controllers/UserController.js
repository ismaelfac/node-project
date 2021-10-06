const { httpError } = require('../helpers/handleError');
const jwt  = require('jsonwebtoken');
const UsersSchema  = require('../models/users');
const RoleSchema = require('../models/roles');

const index = async (req, res) => {
    try {
        const ListAll = await UsersSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const getItem = async (req, res) => {
    try {
        const ListAll = await UsersSchema.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const createdItem = async (req, res) => {
    try {
        const { username, email, password, roles } = req.body;
        const foundRoles = await RoleSchema.find({name: {$in: roles}});
        const newUser = new UsersSchema({
            username, 
            email, 
            password: await UsersSchema.encryptPassword(password),
            roles: foundRoles[0]._id
        })
        const saveUser = await newUser.save();
        const token = jwt.sign({id: saveUser._id}, 'ALIADOS',{
            expiresIn: 86400 //24 HORAS
        })
        res.status(201).send({ data: token })        
    } catch (e) {
        httpError(res, e)
    }
}

const updatedItem = async (req, res) => {
    try {
        const updateUSer = await UsersSchema.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).send(updateUSer)
    } catch (e) {
        httpError(res, e)
    }
}

const deletedItem = (req, res) => {
    
}

module.exports = { index, getItem, createdItem, updatedItem, deletedItem }