const { model, Schema } = require("mongoose");

const beneficiarySchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
  },

  middleName: {
    type: String,
    required: true,
    minlength: 1,
  },

  lastName: {
    type: String,
    required: true,
    minlength: 1,
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
  },
});

module.exports = model("Beneficiary", beneficiarySchema);
