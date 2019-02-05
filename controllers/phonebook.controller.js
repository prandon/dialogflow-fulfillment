const Phone = require('../models/phone.model')

exports.getAllEntries = (req, res) => {
    Phone.find({}, function(err, entries) {
        var entriesMap = {};
    
        entries.forEach(function(entry) {
          entriesMap[entry._id] = entry;
        });
    
        res.send(entries);  
    });
}

exports.getEntry = (req, res) => {
    Phone.find({name: new RegExp('^'+req.params.name+'$', "i")}, function(err, docs) {
        if(err) return next(err);
        res.send(docs);
    });
}

exports.createEntry = (req, res) => { 
    let phone = new Phone({
        name: req.body.name,
        phone: req.body.phone
    });

    phone.save(function(error) {
        if(error) {
            return next(error)
        }
        res.send('Saved Successfully');
    });
}

exports.fetchAllPhones = (req, callback) => {
    Phone.find({}, function(err, entries) {
        let dataToSend = '';
        if (err) {
            dataToSend = 'कुछ गड़बड़ है। बाद में कोशिश करें।'
        }
        else {
            var entriesMap = {};
            entries.forEach(function(entry) {
                entriesMap[entry._id] = entry;
            });

            var arrayLength = entries.length;
            for (var i = 0; i < arrayLength; i++) {
                dataToSend += 'मुझे याद है कि '+entries[i].name+' का फोन नंबर है '+entries[i].phone+'\n'
            }
        }
    
        let response;
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
    
}

exports.savePhone = (req, callback) => {
    let phone = new Phone({
        name: req.body.queryResult.parameters.name,
        phone: req.body.queryResult.parameters.phone
    });

    phone.save(function(error) {
        let dataToSend = '';
        if(error) {
            console.log(error);
            dataToSend = 'कुछ गड़बड़ है। बाद में कोशिश करें।';
        }
        else {
            dataToSend = 'ठीक है, मैं याद रखूंगा।'
        }

        let response;
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
}

exports.getPhone = (req, callback) => {
    Phone.find({name: new RegExp('^'+req.body.queryResult.parameters.name+'$', "i")}, function(err, docs) {
        let dataToSend = '';
        if(err) {
            console.log(err);
            dataToSend = 'कुछ गड़बड़ है। बाद में कोशिश करें।';
        }
        else {
            var arrayLength = docs.length;
            if (arrayLength > 0){
                for (var i = 0; i < arrayLength; i++) {
                    dataToSend += 'मुझे याद है कि '+docs[i].name+' का फोन नंबर है '+docs[i].phone+'\n'
                }
            }
            else{
                dataToSend = 'क्षमा करें, मुझे '+req.body.queryResult.parameters.name+' के बारे में कुछ भी याद नहीं है'
            }
            
        }

        let response;
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
}
