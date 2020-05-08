const express = require('express');
const router = express.Router();

const {getBooking, createBooking, getAllOrders,getOrderById} = require("../controllers/booking");
const {isSingedIn, isAuthenticated, isAdmin} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")


// params
router.param("userId",getUserById);
router.param("orderId",getOrderById);

// get route
router.get("/status/booking/:userId",isSingedIn, isAuthenticated,isAdmin,getBooking);

// post route
router.post("/create/booking/:userId",isSingedIn,isAuthenticated,createBooking);




module.exports = router;