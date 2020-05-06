const express = require('express');
const router = express.Router();

const {getBooking, createBooking} = require("../controllers/booking");
const {isSingedIn, isAuthenticated, isAdmin} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")


// params
router.param("userId",getUserById);

// get route
router.get("/status/booking/:userId",isSingedIn, isAuthenticated ,getBooking);

// post route
router.post("/create/booking/:userId",isSingedIn,isAuthenticated,isAdmin,createBooking);

module.exports = router;