const inventoriesModel = require("../../models/Inventories.schema");
const ordersModel = require("../../models/orders.schema");

// Câu 2 : Write an api endpoint for that getting all products in inventory
const getAllInventories = (req, res) => {
  inventoriesModel
    .find({})
    .then((data) => {
      res.status(200).json({
        msg: "Get all inventories successfully",
        data: data,
      });
    })
    .catch(() => {
      res.status(500).json({
        msg: "Internal server error",
        data: null,
      });
    });
  // res.send('in');
};

// Câu 3 : Update the API to accept a query for getting only products that have low quantity (less than 100).
const getLowQuantityInventories = (req, res) => {
  inventoriesModel
    .find({ instock: { $lt: 100 } })
    .then((data) => {
      res.status(200).json({
        msg: "Get inventories with quantity below 100 successfully",
        data: data,
      });
    })
    .catch(() => {
      res.status(500).json({
        msg: "Internal server error",
        data: null,
      });
    });
  // res.send('in');
};

// câu 6 : Create an API for getting orders with the description of product inside each orders.
const getOrders = (req, res) => {
  const { item } = req.query;
  ordersModel
    .find({ item: item })
    .then((data) => {
      res.status(200).json({
        data: data,
      });
    })
    .catch(() => {
      res.status(500).json({
        msg: "Internal server error",
        data: null,
      });
    });
};

module.exports = [getAllInventories, getOrders, getLowQuantityInventories];
