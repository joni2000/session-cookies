const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController')
const mainValidator =require('../validators/mainValidator')

router.get('/', controller.main)
router.post('/user', controller.userData)


module.exports = router