/*
    Basic controller template
*/

const handleError = require('../utils/errorHandler.js');
const dataModel = require('../models/dataModel.js');

const findAll = async (req, res) => {
    try {
        const var1 = req.body.name;
        const var2 = req.params.param;

        const foundData = await dataModel.findAll();
        res.status(200).json(foundData);

    } catch (err) {
        res.status(404).json(err);
    }
}


const findOne = async (req, res) => {
    try {
        const dataId = req.body.dataId
        const foundData = await dataModel.findOne(dataId);
        res.status(200).json(foundData);
    } catch (err) {
        res.status(404).json(err);
    }
}



module.exports = {
    findAll,
    findOne
}