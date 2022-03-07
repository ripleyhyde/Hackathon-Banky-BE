const { model, Schema } = require("mongoose");

const beneficiarySchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
  },
  middleName: {
    type: String,
    required: true,
    minlength: 3,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
  },
  iban: {
    type: String,
    required: true,
    unique: true,
    length: 30,
  },

  beneficiaryAddress: {
    type: String,
    required: true,
    minlength: 10,
  },
});
module.exports = model("Beneficiary", beneficiarySchema);
