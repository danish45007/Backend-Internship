var mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema



const ProductCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Car"
    },
    number: String,
    rent: Number,
});
const ProductCart = mongoose.model("ProductCart",ProductCartSchema)




var BookingSchema = mongoose.Schema({
    products: [ProductCartSchema],

    user: {
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

module.exports = mongoose.model("Booking",BookingSchema);

