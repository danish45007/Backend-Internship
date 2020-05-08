const Booking = require("../models/booking");
const Cars = require("../models/car");




exports.getOrderById = (req,res,next,id) => {
    Order.findById(id)
    .populate("products.product", "number rent")
    .exec((err,order) => {
        if(err) {
            return res.status(400).json({
                error: "Order Id not found"
            });
        }
        req.order = order;
        next();
    });
};





// Get booking
exports.getBooking = (req,res) => {
    Booking.find().populate("user", "_id name").exec((err,booking) => {
        if(err) {
            return res.status(400).json({
                "Error": "No booking found in DB"
            })
        }
        return res.json(booking)
    })
}


// Post a booking

exports.createBooking = (req,res) => {
    const booking = new Booking(req.body);
    booking.save((err, booking) => {
        if(err) {
            console.log(err)
            return res.status(400).json({
                "Error": "Unable to create booking at this moment"
            })
        }
        return res.json(booking)
    })
};

// Get booking's
exports.getAllOrders = (req,res) => {
    Order.find().populate("cars", "_id number").exec((err,order) => {
        if(err) {
            return res.status(400).json({
                error: "No Order Found in DB"
            });
        }
        return res.json(order);
    });
};
