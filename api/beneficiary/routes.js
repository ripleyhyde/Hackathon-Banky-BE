const express = require("express");
const router = express.Router();
const {
  beneficiaryCreate,
  beneficiaryGet,
  beneficiaryDelete,
} = require("../beneficiary/controller");

//ROUTES
router.post("/create", beneficiaryCreate);
router.get("/all", beneficiaryGet);
router.delete("/:beneficiaryId", beneficiaryDelete);

module.exports = router;
