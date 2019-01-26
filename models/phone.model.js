const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PhoneSchema = new Schema({
    name: {type: String, required: true, max: 100},
    phone: {type: Number, required: true}
});

module.exports = mongoose.model('PhoneEntry', PhoneSchema);