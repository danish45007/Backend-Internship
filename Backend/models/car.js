var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
    number: {
        type: Number,
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
});

module.exports = mongoose.model("Car",carSchema);

