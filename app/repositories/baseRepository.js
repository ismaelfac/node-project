const mongoose = require('mongoose');
const { httpError } = require('../helpers/handleError');
const postModel  = require('../models/posts')

class BaseRepository {
    constructor(model){
        this.model = model;
    }

    async index(){
        try {
            const ListAll = await this.model.find({});
            res.status(201).send({ data: ListAll });
        } catch (e) {
            httpError(res, e)
        }
    }

    async create(entity) {
        return await this.model.create(entity);
    }
}

module.exports = BaseRepository;



