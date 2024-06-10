// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    shopname: String,
    date: Date,
    products: [{
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }, {
        product: String,
        quantity: Number
    }]
});

module.exports = mongoose.model('Order', orderSchema);
