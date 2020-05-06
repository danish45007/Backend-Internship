const express = require('express');
const router = express.Router();

const {createcar, getCar} = require("../controllers/car")
const {isAdmin, isAuthenticated, isSingedIn} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")


router.param("userId",getUserById);
router.get("/get/car/userId", isSingedIn, isAuthenticated, getCar);

router.post("/create/car/:userId",isSingedIn,isAuthenticated,isAdmin,createcar);

module.exports = router;