const {body} = require('express-validator');
const amountValidator = body('amount')
    .notEmpty()
    .isNumeric()
    .withMessage('amount should be a number');

module.exports = {
    amountValidator
};
