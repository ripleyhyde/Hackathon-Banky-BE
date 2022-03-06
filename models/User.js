const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
    length: 8,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 5,
  },
  firstName: {
    type: String,
    required: true,
    minlength: 5,
  },

  email: {
    type: String,
    required: true,

    // Email validation
    match: /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
  },

  password: {
    type: String,
    required: true,
    //Regex for password must contain at least eight characters,
    //at least one number and both lower and uppercase letters
    //and special characters
    match: /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
  },
});
module.exports = model("User", userSchema);
