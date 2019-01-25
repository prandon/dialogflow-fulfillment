const apiKey = require('../weatherApiKey')
const http = require('http');

exports.getWeather = ('', (req, res) => {
    const cityToSearch = req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.city ? req.body.queryResult.parameters.city : 'Mumbai';
    const reqUrl = encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&APPID=${apiKey}`);
    http.get(reqUrl, (responseFromAPI) => {
        let completeResponse = '';
        responseFromAPI.on('data', (chunk) => {
            completeResponse += chunk;
        });
        responseFromAPI.on('end', () => {
            const weatherData = JSON.parse(completeResponse);
            
            let dataToSend = weatherData.cod == 404 ? `I can't find this city.\n` : `It is ${weatherData.weather[0].description}.\n Do you want to know something else?`;

            return res.json({
                fulfillmentText: dataToSend,
                fulfillmentMessages: [
                    {
                        text: {
                            text: [
                                dataToSend
                            ]
                        }
                    }
                ],
                "source": "example.com",
            });
        });
    }, (error) => {
        return res.json({
            fulfillmentText: "Something went wrong",
            fulfillmentMessages: [
                {
                    text: {
                        text: [
                            "Something went wrong"
                        ]
                    }
                }
            ],
            "source": "example.com",
        });
    })
})

exports.fetchWeather = (req, callback) => {
    const cityToSearch = req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.city ? req.body.queryResult.parameters.city : 'Mumbai';
    const reqUrl = encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&APPID=${apiKey}`);
    let response;
    http.get(reqUrl, (responseFromAPI) => {
        let completeResponse = '';
        responseFromAPI.on('data', (chunk) => {
            completeResponse += chunk;
        });
        responseFromAPI.on('end', () => {
            const weatherData = JSON.parse(completeResponse);
            
            let dataToSend = weatherData.cod == 404 ? `I can't find this city.\n` : `It is ${weatherData.weather[0].description}.\n Do you want to know something else?`;
            response = {
                fulfillmentText: dataToSend,
                fulfillmentMessages: [
                    {
                        text: {
                            text: [
                                dataToSend
                            ]
                        }
                    }
                ],
                "source": "example.com",
            }
            callback(response);
        });
    }, (error) => {
        response = {
            fulfillmentText: "Something went wrong",
            fulfillmentMessages: [
                {
                    text: {
                        text: [
                            "Something went wrong"
                        ]
                    }
                }
            ],
            "source": "example.com",
        };
        callback(response);
    })
}