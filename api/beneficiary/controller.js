const Beneficiary = require("../../models/Beneficiary");

exports.beneficiaryCreate = async (req, res, next) => {
  try {
    const newBeneficiary = await Beneficiary.create(req.body);
    return res.status(201).json(newBeneficiary);
  } catch (error) {
    next(error);
  }
};

exports.beneficiaryGet = async (req, res) => {
  try {
    const beneficiaries = await Beneficiary.find();
    return res.json(beneficiaries);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.beneficiaryDelete = async (req, res) => {
  try {
    const { beneficiaryId } = req.params;
    const foundBeneficiary = await Beneficiary.findByIdAndDelete({
      _id: beneficiaryId,
    });
    if (foundBeneficiary) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "This beneficiary does not exist" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
