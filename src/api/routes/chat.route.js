const express = require('express')
const controller = require('../controllers/chat.controller')
const keyVerify = require('../middlewares/keyCheck')
const loginVerify = require('../middlewares/loginCheck')

const router = express.Router()

router.route('/find').get(keyVerify, loginVerify, controller.listById)
router.route('/all').get(keyVerify, loginVerify, controller.listAll)

module.exports = router
