const inventoriesModel = require('../../models/Inventories.schema');
const ordersModel = require('../../models/orders.schema');

const getAllInventories = (req, res)=>{
    inventoriesModel.find({}).then((data)=>{
        res.status(200).json({
            msg: "Get all inventories successfully",
            data: data
        })
    }).catch(()=>{
        res.status(500).json({
            msg: "Internal server error",
            data: null
        })
    })
    // res.send('in');
}

const getLowQuantityInventories = (req, res)=>{
    inventoriesModel.find({instock: {$lt: 100}}).then((data)=>{
        res.status(200).json({
            msg: "Get inventories with quantity below 100 successfully",
            data: data
        })
    }).catch(()=>{
        res.status(500).json({
            msg: "Internal server error",
            data: null
        })
    })
    // res.send('in');
}

const getOrders = (req, res)=>{
    const {item} = req.query;
    ordersModel.find({item: item}).then((data)=>{
        res.status(200).json({
            data: data
        })
    }).catch(()=>{
        res.status(500).json({
            msg: "Internal server error",
            data: null
        })
    })
}

module.exports = [getAllInventories, getOrders, getLowQuantityInventories];