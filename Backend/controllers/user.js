const User =  require("../models/user");


exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err,user) => {
        if (err ||  ! user) {
            return res.status(400).json({
                error: "No user was found in DB"
            });
        }
        req.profile = user
        next();
    });
};                                                                                                                                                                                                                                                                                  

// Get User by Id
exports.getUser = (req,res) => {
    req.profile.salt = undefined;
    req.profile.ecrypt_password = undefined;
    return res.json(req.profile)
}






