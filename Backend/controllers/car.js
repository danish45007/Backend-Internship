const Car = require("../models/car")

exports.getCar = (req,res) => {
    Car.find().exec((err,car) => {
        if(err) {
            return res.status(400).json({
                "Error": "No car found in DB"
            })
        }
        return res.json(car)
    })
}
      
// Post a car info

exports.createcar = (req,res) => {
    const car = new Car(req.body);
    car.save((err, car) => {
        if(err) {
            return res.status(400).json({
                "Error": "Unable to create car"
            })
        }
        return res.json(car)
    })
};
