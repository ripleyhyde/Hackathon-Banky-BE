const express = require("express");
const router = express.Router();
const { signUp, logIn } = require("./controllers");
const passport = require("passport");

router.post("/signup", signUp);

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  logIn
);

module.exports = router;
