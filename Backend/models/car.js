var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
    number: {
        type: String,
        trim: true,
        required: true
    },

    model: {
        type: String,
        maxlength: 32,
        trim: true,
        required: true
    },

    seating: {
        type: Number,
        trim: true,
        required: true
    },
    rent: {
        type: Number,
        tim: true,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model("Car",carSchema);

