const mongoose = require('mongoose');


const inventoriesModel = mongoose.Schema({
    _id: {
        type: Number,
        require: true
    },
    sku: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    instock: {
        type: Number,
        require: true
    }
},{
    collection: 'Inventories'
});

module.exports = mongoose.model('Inventories', inventoriesModel);