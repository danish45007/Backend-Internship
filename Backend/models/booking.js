var mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema


var bookingSchema = mongoose.Schema({
    userinfo: {
        name: String,
        address: String,
        phonenumber: Number,
    },
    
    bookingdate: {
        type: Date
    },
    returndate: {
        type: Date
    } 

},{timestamps: true});

module.exports = mongoose.model("Booking",bookingSchema);

