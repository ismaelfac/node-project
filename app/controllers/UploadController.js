const { httpError } = require('../helpers/handleError');
const uploads  = require('../models/uploads');

const uploadController = async (req, res) => {
    try {
        const fileUploads = req.file;
        console.log('fileUploads: '+fileUploads);
        const documentContractActorId = "61532dc499a1a51448d8eabf";
        const title = fileUploads.originalName;
        const description = 'Description Pdf 2';
        const file = fileUploads.path;
        const size = fileUploads.size;
        const isActive = true;
        const resDetail = await uploads.create({
            documentContractActorId, title, description, file, size, isActive
        })
        res.status(201).send({ data: resDetail});
    } catch (e) {
        httpError(res, e);
    }
}

module.exports = module.exports = { uploadController }
