// Import's
const { check } = require('express-validator');
var express = require('express')
var router = express.Router()
const {signout,signup,signin,isSingedIn} = require("../controllers/auth")

// Signup route
router.post("/signup",[
    check("name", "name should be atleast 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be atleast 5 char").isLength({ min: 5 })
],signup);

// Signin route
router.post("/signin",[
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 5 })
],signin);


// Signout route
router.get("/signout",signout);

// Test protected route 

router.get("/testroute",isSingedIn,(req,res) => {
    return res.json(req.auth);

});

// Expose the router with other files
module.exports = router;
