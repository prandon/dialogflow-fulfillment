const main_controller = require('../controllers/main.controller')
const express = require('express')
const router = express.Router()

router.post('/route', main_controller.handleRequest)

module.exports = router