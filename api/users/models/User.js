const { model, Schema } = require("mongoose");
// const { stringify } = require("nodemon/lib/utils");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
    minlength: 8,
    maxlength: 8,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 5,
  },
  firstName: {
    type: String,
    minlength: 5,
  },

  email: {
    type: String,
    required: true,
    match: /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
  },

  password: {
    type: String,
    required: true,
    match: /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
  },
});
module.exports = model("User", userSchema);
