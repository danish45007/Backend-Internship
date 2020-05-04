var mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1')


var userSchema = new  mongoose.Schema({
  name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true, 
  },
  lastname: {
      type: String,
      required: false,
      maxlength: 32,
      trim: true,

  },
  email: {
      type: String,
      trim: true,
      required: true,
      unique: true,

  },
  phonenumber : {
      type: Number,
    }

},{timestamps: true});


// Creatimg objects from the class User<userSchema
module.exports = mongoose.model("User",userSchema)