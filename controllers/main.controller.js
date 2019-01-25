const movie_controller = require('../controllers/movie.controller')
const weather_controller = require('../controllers/weather.controller')

exports.handleRequest = ('', (req, res) => {

    const requestType = req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.requestType ? req.body.queryResult.parameters.requestType : 'movie';
    
    if (requestType === 'movie'){
        movie_controller.fetchMovie(req,(response)=>{
            return res.json(response)
        })
    }
    else {
        weather_controller.fetchWeather(req,(response)=>{
            return res.json(response)
        })
    }
    
});