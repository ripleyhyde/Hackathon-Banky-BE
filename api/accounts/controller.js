const Account = require("../../models/Account");

exports.fetchAccount = async (accountsId, next) => {
  try {
    const account = await Account.findById(accountsId);
    return account;
  } catch (error) {
    next(error);
  }
};

exports.getAccount = async (req, res, next) => {
  try {
    const accountArray = await Account.find().populate("owner", "username");
    res.json(accountArray);
  } catch (error) {
    next(error);
  }
};

exports.getDetail = async (req, res, next) => {
  try {
    const accountOne = await accounts
      .findById({ _id: req.account._id })
      .populate("owner");
    res.json(accountOne);
  } catch (error) {
    next(error);
  }
};

exports.createAccount = async (req, res, next) => {
  console.log(
    "🚀 ~ file: controllers.js ~ line 33 ~ exports.createAccount= ~ req",
    req.body
  );
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/api/${
        req.file.path
      }`;
    }
    req.body.owner = req.user.id;

    const newAccount = await Account.create(req.body);
    console.log(
      "🚀 ~ file: controllers.js ~ line 42 ~ exports.createAccount= ~ newAccount",
      newAccount
    );

    return res.status(201).json(newAccount);
  } catch (error) {
    next(error);
  }
};

// exports.deleteAccount = async (req, res, next) => {
//   try {
//     await accounts.findByIdAndDelete({
//       _id: req.account.id,
//     });
//     res.status(204).end();
//   } catch (error) {
//     next(error);
//   }
// };
