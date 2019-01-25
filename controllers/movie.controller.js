const http = require('http');
const API_KEY = require('../apiKey');

exports.getMovieDetails = ('', (req, res) => {

    const movieToSearch = req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.movie ? req.body.queryResult.parameters.movie : 'The Godfather';
    const reqUrl = encodeURI(`http://www.omdbapi.com/?t=${movieToSearch}&apikey=${API_KEY}`);
    http.get(reqUrl, (responseFromAPI) => {
        let completeResponse = '';
        responseFromAPI.on('data', (chunk) => {
            completeResponse += chunk;
        });
        responseFromAPI.on('end', () => {
            const movie = JSON.parse(completeResponse);
            let dataToSend = movieToSearch === 'The Godfather' ? `I don't have the required info on that. Here's some info on 'The Godfather' instead.\n` : '';
            dataToSend += `${movie.Title} is a ${movie.Actors} starer ${movie.Genre} movie, released in ${movie.Year}. It was directed by ${movie.Director}\n Do you want to know something else?`;

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
            fulfillmentText: 'Something went wrong!',
                fulfillmentMessages: [
                    {
                        text: {
                            text: [
                                'Something went wrong!'
                            ]
                        }
                    }
                ],
                "source": "example.com",
        });
    });
});

exports.fetchMovie = (req, callback) => {
    const movieToSearch = req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.movie ? req.body.queryResult.parameters.movie : 'The Godfather';
    const reqUrl = encodeURI(`http://www.omdbapi.com/?t=${movieToSearch}&apikey=${API_KEY}`);
    let response;
    http.get(reqUrl, (responseFromAPI) => {
        let completeResponse = '';
        responseFromAPI.on('data', (chunk) => {
            completeResponse += chunk;
        });
        responseFromAPI.on('end', () => {
            const movie = JSON.parse(completeResponse);
            let dataToSend = movieToSearch === 'The Godfather' ? `I don't have the required info on that. Here's some info on 'The Godfather' instead.\n` : '';
            dataToSend += `${movie.Title} is a ${movie.Actors} starer ${movie.Genre} movie, released in ${movie.Year}. It was directed by ${movie.Director}\n Do you want to know something else?`;
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
            callback(response)
        });
    }, (error) => {
        callback({
            fulfillmentText: 'Something went wrong!',
                fulfillmentMessages: [
                    {
                        text: {
                            text: [
                                'Something went wrong!'
                            ]
                        }
                    }
                ],
                "source": "example.com",
        })
    });
}