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
      trim: true,
    },
    ecrypt_password: {
         type: String,
      //    trim: true,
         required: true,
  
  
     },
     salt: String,
     role: {
         type: Number,
         default: 0,
      
      },
      
      purchases : {
          type: Array,
          default: 0,
      },
  

},{timestamps: true});

userSchema.virtual("password")
    .set(function(password){
        this._password = password
        this.salt = uuidv1()
        this.ecrypt_password = this.securePassword(password);
    })
    .get(function() {
        return this._password
    })

userSchema.methods = {
    authenticate: function(plainpassword){
        return this.securePassword(plainpassword) === this.ecrypt_password
    },
    
    securePassword: function(plainpassword){
        if (!plainpassword) return "";
        try {
            return crypto.createHmac('sha256', this.salt)
            .update(plainpassword)
            .digest('hex');

        } catch(err) {
            return "";
        }
    }
};




// Creatimg objects from the class User<userSchema
module.exports = mongoose.model("User",userSchema)