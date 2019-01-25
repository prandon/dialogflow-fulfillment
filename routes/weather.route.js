const express = require('express')
const router = express.Router()
const weather_controller = require('../controllers/weather.controller')

router.post('/getWeather', weather_controller.getWeather)

module.exports = router;