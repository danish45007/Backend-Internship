// Import 
const User = require('../models/user')
const { check, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
require('dotenv').config();
var cookieParser = require('cookie-parser')

// Singup
exports.signup = (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg,
            error_param: errors.array()[0].param
        })
    }


    const user = new User(req.body)
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: "NOT able to save user in DB"
            })
        }
        res.json({
            name: user.name,
            email: user.email,
            id: user._id
        });

    });
};

// Signin
exports.signin = (req,res) => {
    const errors = validationResult(req)
    const { email,password } = req.body;

    if(!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg,
            error_param: errors.array()[0].param
        });
    }

    User.findOne({email}, (err,user) => {
        if (err || ! user) {
            return res.status(400).json({
                error: "user email doesn't exists"
            })
        }

        if (!user.authenticate(password)){
            return res.status(401).json({
                error: "Email and Password do not match"
            })
        
        } 
        // Creating a web token
         const token = jwt.sign({_id: user._id}, process.env.SECRET);
        
         //  put token in cookie
        res.cookie("token",token, {expire: new Date() + 9999});

        // Send response to frontend
        const {_id,name,email,role} = user;
        return res.json({token,user: {_id,name,email,role}});

    });

};

// Singout 
exports.signout = (req,res) => {
    res.clearCookie("token");
    res.json ({
        message: "You are Singout Successfully"
    });
};


// Protected routes

// Authorization route
exports.isSingedIn = expressJwt({
    secret: process.env.SECRET,
    userProperty: "auth"
    
})

// Custom Middlewares

// Authentication middleware
// req.profile -> from frontend
exports.isAuthenticated = (req,res,next) => {
    let checker = req.profile && req.auth && req._id == req.auth._id;
    if (!check) {
        return res.status(403).json({
            error: "Access Denied"
        })
    }
    next();
}

// Admin middleware
exports.isAdmin = (req,res,next) => {
    if (req.profile.role === 0 ){
        return res.status(403).json({
            "error": "You are not Admin"
        });
    }
    next();

}