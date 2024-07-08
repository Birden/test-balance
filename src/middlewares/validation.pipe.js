const {validationResult} = require('express-validator');

function validate (req, res, next) {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.status(400).json(validationErrors);
    } else {
        next();
    }
}
module.exports = {
    validate
};
