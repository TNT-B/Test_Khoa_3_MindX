const mongoose = require('mongoose');

const ordersModel = mongoose.Schema({
    _id: Number,
    item: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
},{
    collection: 'Orders'
});

module.exports = mongoose.model('Orders', ordersModel);