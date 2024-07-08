const router = require('express').Router();
const usersController = require('../controllers/users.controller');
const {idValidator} = require('../validators/userId.validator');
const {amountValidator} = require('../validators/userAmount.validator');
const {validate} = require('../middlewares/validation.pipe');

router.get('/', usersController.getAll);
router.get('/:id', idValidator, validate, usersController.getById);
router.patch('/:id', idValidator, amountValidator, validate, usersController.patch);

module.exports = router;
