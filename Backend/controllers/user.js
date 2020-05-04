const User =  require("../models/user");



exports.getUser = (req,res) => {
    User.find().exec((err,user) => {
        if(err){
            return res.status(400).json({
                "message": "Unable to get users"
            })
        }
        return res.json(user)
    }) 
};

exports.createUser = (req,res) => {
    const user = new User(req.body);
    console.log(req.body)
    user.save((err,user) => {
        if(err) {
            return res.status(400).json({
                error: "Category not created in DB"
            });
        }
        return res.json(user);
        
    });
};
    
