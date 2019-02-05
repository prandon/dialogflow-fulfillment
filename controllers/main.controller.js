const movie_controller = require('../controllers/movie.controller')
const weather_controller = require('../controllers/weather.controller')
const phonebook_controller = require('../controllers/phonebook.controller')

exports.handleRequest = ('', (req, res) => {

    const requestType = req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.requestType ? req.body.queryResult.parameters.requestType : 'movie';
    
    if (requestType === 'movie'){
        movie_controller.fetchMovie(req,(response)=>{
            return res.json(response)
        })
    }
    else if (requestType === 'weather') {
        weather_controller.fetchWeather(req,(response)=>{
            return res.json(response)
        })
    }
    else if (requestType === 'phone-get-all') {
        phonebook_controller.fetchAllPhones(req,(response)=>{
            return res.json(response)
        })
    }
    else if (requestType === 'phone-save') {
        phonebook_controller.savePhone(req,(response)=>{
            return res.json(response)
        })
    }
    else if (requestType === 'phone-get') {
        phonebook_controller.getPhone(req,(response)=>{
            return res.json(response)
        })
    }
    
});