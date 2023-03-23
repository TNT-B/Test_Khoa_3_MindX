const express = require("express");
const router = express.Router();
const AuthHandler = require("../controllers/AuthControllers/Auth.controller");
const [
  getAllInventories,
  getOrders,
  getLowQuantityInventories,
] = require("../controllers/DataControllers/DataServer.controller");

// câu 5 : Restrict the resource. Only logged-in user can visit it.
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "mysecretkey";
const checkAuthenticated = (req, res, next) => {
  const { token } = req.body;
  jwt.verify(token, JWT_SECRET_KEY, (err, encoded) => {
    if (!err) {
      next();
    } else {
      res.status(403).json({
        msg: "You must log in or sign up before!",
        error: err,
      });
    }
  });
};

router.post("/login", AuthHandler);
router.get("/inventories/all", checkAuthenticated, getAllInventories);
router.get("/inventories/low", checkAuthenticated, getLowQuantityInventories);
router.get("/orders", checkAuthenticated, getOrders);

module.exports = router;
