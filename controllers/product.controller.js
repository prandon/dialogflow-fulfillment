const Product = require('../models/product.model')

exports.test = function(req, res) {
    res.send("Hey gottchaa!!")
}

exports.create = function(req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    )

    product.save(function (err) {
        if (err) {
            return next(err)
        }
        res.send('Product Created Successfully')
    })
}

exports.product_details = function(req, res){
    Product.findById(req.params.id, function(err, product){
        if(err) return next(err);
        res.send(product);
    })
}

exports.product_update = function(req, res){
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, product) => {
        if (err) return next(err);
        res.send('Updated Product');
    })
}

exports.product_delete = function(req, res){
    Product.findByIdAndRemove(req.params.id, (err, product) => {
        if (err) return next(err);
        res.send('Deleted Product');
    })
}