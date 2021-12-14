const { httpError } = require('../helpers/handleError');
const uploads  = require('../models/uploads');

const uploadController = async (req, res) => {
    try {
        const fileUploads = req.file;
        const documentContractActorId = "";
        const documentContractEstateId = "61532dc499a1a51448d8eabe";
        const title = fileUploads.originalName;
        const description = 'Description Pdf 2';
        const destination = fileUploads.path;
        const size = fileUploads.size;
        const isActive = true;
        const resDetail = await uploads.create({
            documentContractActorId, documentContractEstateId, title, description, destination, size, isActive
        })
        res.status(201).send({ data: resDetail});
    } catch (e) {
        httpError(res, e);
    }
}

module.exports = module.exports = { uploadController }
