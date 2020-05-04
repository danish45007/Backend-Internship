const express = require('express');
const router = express.Router();

const {getBooking, createBooking} = require("../controllers/booking");


// get route
router.get("/getbooking", getBooking);

// post route
router.post("/create/booking", createBooking)

module.exports = router;