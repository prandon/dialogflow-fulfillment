const express = require('express')
const bodyParser = require('body-parser')
const product = require('./routes/product.route')

const app = express()

//set up mongoose connection
const mongoose = require('mongoose')

let dev_db_user = 'mongodb://pranjal:pranjal1234@ds153974.mlab.com:53974/product_db'

const mongoDB = process.env.MONGODB_URI || dev_db_user;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/product", product)

app.listen(5000, () => console.log('Server Started at 5000'))