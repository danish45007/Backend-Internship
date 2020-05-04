const express = require('express');
const router = express.Router();

const {getUser, createUser} = require('../controllers/user')


router.get("/user",getUser);

router.post("/createUser",createUser);

module.exports = router;