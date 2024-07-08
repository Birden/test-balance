const {param} = require('express-validator');

const idValidator = param('id')
    .isNumeric()
    .withMessage('id should be a number');

module.exports = {
    idValidator
};
