const express = require("express");
const router = express.Router();
const { signUp, logIn } = require("./controller");
const passport = require("passport");

//ROUTES
router.post("/signup", signUp);
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  logIn
);

module.exports = router;
