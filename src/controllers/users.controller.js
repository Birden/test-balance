const {findAll, findById, update} = require('../services/users.service');
const errorHandler = require('../utils/error.handler');

async function getAll (req, res) {
    res.json(await findAll());
}
async function getById (req, res) {
    try {
        res.json(await findById(req.params.id));
    } catch (e) {
        res.json(errorHandler(e));
    }
}
async function patch (req, res) {
    try {
        res.json(await update(req.params.id, req.body?.amount));
    } catch (e) {
        res.json(errorHandler(e));
    }
}
module.exports = {getAll, getById, patch};
