const { validationResult } = require('express-validator');

module.exports.error422 = (req, res, next) => {
    
    const errors = validationResult(req);

    if(!errors.isEmpty()){

        return res.status(422).json({
            errors: errors.array()
        });

    }

} 