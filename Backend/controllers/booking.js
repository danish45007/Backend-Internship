const Booking = require("../models/booking");


// Get booking
exports.getBooking = (req,res) => {
    Booking.find().exec((err,booking) => {
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
            return res.status(400).json({
                "Error": "Unable to create booking at this moment"
            })
        }
        return res.json(booking)
    })
};
