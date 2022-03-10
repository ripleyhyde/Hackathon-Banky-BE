const express = require("express");
const passport = require("passport");
const router = express.Router(); //to route your applications
const {
  fetchAccount,
  getAccount,
  createAccount,
  getDetail,
  deleteAccount,
} = require("./controller");

//get, POST, PUT, DELETE

//post, delete, put => req
//get => res
router.param("/accountsId", async (req, res, next, id) => {
  const account = await fetchAccount(id, next);
  if (account) {
    req.account = account;
    next();
  } else {
    next({ status: 404, message: "account not found" });
  }
});

router.get("/all", getAccount);

router.get("/:accountsId", getDetail); //returns one account: id

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  createAccount
);

// router.delete("/:accountsId", deleteAccount);

module.exports = router;
