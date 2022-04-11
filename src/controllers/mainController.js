const { validationResult } = require('express-validator');

module.exports = {
    main: (req, res)=> {
        res.render('index')
    },
    userData: (req, res) => {
        let errors = validationResult(req)

        if(errors.isEmpty()){
            res.send(errors)
            res.render('index', {
                userData: req.body
            })
        }else {
            res.render('index', {
                errors: errors.mapped()
            })
        }

    }
}