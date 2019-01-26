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