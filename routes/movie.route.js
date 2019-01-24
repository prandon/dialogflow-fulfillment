const express = require('express')
const router = express.Router()

const movie_controller = require("../controllers/movie.controller")

//routes
router.post('/getMovieDetails', movie_controller.getMovieDetails)

module.exports = router;