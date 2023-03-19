const express = require('express');
const router = express.Router();
const AuthHandler = require('../controllers/AuthControllers/Auth.controller');
const [getAllInventories, getOrders, getLowQuantityInventories] = require('../controllers/DataControllers/DataServer.controller');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = 'h3254hgu4123ug';
const checkAuthenticated = (req, res, next)=>{
    const { token } = req.body;
    jwt.verify(token, JWT_SECRET_KEY, (err, encoded)=>{
        if(!err){
            next();
        }
        else{
            res.status(403).json({
                msg: "You must log in or sign up before!",
                error: err
            })
        }
    })
}

router.post('/login', AuthHandler);
router.get('/inventories/all',checkAuthenticated, getAllInventories);
router.get('/inventories/low',checkAuthenticated, getLowQuantityInventories);
router.get('/orders', checkAuthenticated, getOrders);

module.exports = router;