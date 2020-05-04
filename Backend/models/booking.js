var mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema


var bookingSchema = mongoose.Schema({
    userdetails: {
        type: ObjectId,
        ref: "User"
    },
    bookingdate: {
        type: Date
    },
    returndate: {
        type: Date
    } 

},{timestamps: true});

module.exports = mongoose.model("Booking",bookingSchema);

