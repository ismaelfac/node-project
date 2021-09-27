const { httpError } = require('../helpers/handleError');
const uploads  = require('../models/uploads')

const upload = async (req, res) => {
    try {
        const { file } = req;
        console.log(file)
        const title = 'Pdf 1';
        const description = 'Description Pdf 1';
        const isActive = true;
        const resDetail = await uploads.create({
            title, description, file, isActive
        })
        res.status(201).send({ data: resDetail})
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = module.exports = { upload }
