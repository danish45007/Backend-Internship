const express = require('express');
const router = express.Router();

const {createcar, getCar} = require("../controllers/car")

router.get("/getcar",getCar);

router.post("/create/car",createcar);

module.exports = router;