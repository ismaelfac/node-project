const { httpError } = require('../helpers/handleError');
const userModel  = require('../models/users')

const index = async (req, res) => {
    try {
        const ListAll = await userModel.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}

const getItem = async (req, res) => {
    try {
        const ListAll = await userModel.find({})
        res.send({ data: ListAll })
    } catch (e) {
        httpError(res, e)
    } 
}
const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const resDetail = await userModel.create({
            email, password
        })
        res.status(201).send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const resDetail = await userModel.create({
            email, password
        })
        res.status(201).send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { index, getItem, signin, signup }